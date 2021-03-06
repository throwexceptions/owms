<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Flight;
use App\Models\Document;
use App\Models\CheckList;
use App\Models\OptionList;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use App\Http\Requests\FlightStoreRequest;
use App\Http\Requests\DocumentStoreRequest;

class OtherDetailsController extends Controller
{
    public function show($id, User $user)
    {
        $affiliates = $user->getAffiliatesByAgency(auth()->user()->agency_id)->get();
        $options    = OptionList::query()->select(['id', 'name'])->where('type', 'docs')->get();
        $checklist  = CheckList::query()->where('candidate_id', $id)->get();

        return view('components.agency.employee-details', compact('options', 'id', 'affiliates', 'checklist'));
    }

    public function storeDocument(DocumentStoreRequest $request)
    {
        $path                   = $request->file('attachment')->store('docs');
        $document               = new Document();
        $document->filename     = $request->file('attachment')->getClientOriginalName();
        $document->candidate_id = $request->candidate_id;
        $document->type         = $request->document;
        $document->path         = $path;
        $document->created_by   = auth()->id();
        $document->save();

        return redirect()->back()->with('success', 'New Document has been inserted');
    }

    public function tableDocuments(Request $request)
    {
        $results = Document::query()
                           ->selectRaw('documents.*, ol.name')
                           ->join('option_lists as ol', 'ol.id', '=', 'documents.type')
                           ->where('candidate_id', $request->candidate_id)
                           ->where('ol.type', 'docs')
                           ->whereNull('deleted_at')
                           ->with('doc');

        return DataTables::of($results)->setTransformer(function ($value) {
            $value->created_at_display = Carbon::parse($value->created_at)->format('M j, Y');

            return collect($value)->toArray();
        })->make(true);
    }

    public function deleteDocuments(Request $request)
    {
        \Storage::delete($request->path);
        Document::destroy($request->id);

        return ['success' => true];
    }

    public function storeFlight(FlightStoreRequest $request)
    {
        $flight                  = new Flight();
        $flight->candidate_id    = $request->candidate_id;
        $flight->details         = $request->details;
        $flight->abroad_agency   = $request->abroad_agency;
        $flight->contact_person  = $request->contact_person;
        $flight->contact_number  = $request->contact_number;
        $flight->contact_address = $request->contact_address;
        $flight->created_by      = auth()->id();
        $flight->save();

        return redirect()->back()->with('success', 'New Flight has been inserted.');
    }

    public function deleteFlight(Request $request)
    {
        Flight::destroy($request->id);

        return ['success' => true];
    }

    public function tableFlights(Request $request)
    {
        $results = Flight::query()
                         ->where('candidate_id', $request->candidate_id)
                         ->with(['agencyAbroad', 'author']);

        return DataTables::of($results)->setTransformer(function ($value) {
            $value->created_at_display = Carbon::parse($value->created_at)->format('M j, Y');

            return collect($value)->toArray();
        })->make(true);
    }

    public function insertCheckList(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
        ], [
            'name.required' => 'Please provide input before submitting.',
        ]);
        $checkList               = new CheckList();
        $checkList->name         = $request->name;
        $checkList->candidate_id = $request->candidate_id;
        $checkList->status       = 'pending';
        $checkList->save();

        return redirect()->back()->with('success', 'checklist inserted.');
    }

    public function approveItem($id)
    {
        CheckList::query()->where('id', $id)->update([
            'status' => 'approved',
        ]);

        return redirect()->back();
    }

    public function pendingItem($id)
    {
        CheckList::query()->where('id', $id)->update([
            'status' => 'pending',
        ]);

        return redirect()->back();
    }

    public function deleteItem($id)
    {
        CheckList::query()->where('id', $id)->delete();

        return redirect()->back();
    }
}
