<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Faker\Factory;
use App\Models\User;
use App\Models\Document;
use App\Models\Candidate;
use App\Models\Information;
use Illuminate\Http\Request;
use App\Rules\ValidAgencyRule;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CandidateStoreRequest;

class CandidateController extends Controller
{
    public function index()
    {
        return view('components.applicants');
    }

    public function tableApplicants(Candidate $candidate)
    {
        $candidate = $candidate->newQuery()->with(['agency', 'employer', 'agent']);

        return DataTables::of($candidate)->setTransformer(function ($value) {
            $value->created_at_display = Carbon::parse($value->created_at)->format('F j, Y');

            return collect($value)->toArray();
        })->make(true);
    }

    public function create($id, Information $information)
    {
        $validator = Validator::make(['id' => $id], [
            'id' => [
                function ($attribute, $value, $fail) {
                    if (User::isAgency($value) == 0) {
                        $fail('The ' . $attribute . ' is invalid.');
                    }
                },
            ],
        ]);

        if ($validator->errors()->messages()) {
            return abort(403);
        }
        $agency_name = $information->newQuery()->where('user_id', $id)->pluck('name')[0];
        $agency_id   = $information->newQuery()->where('user_id', $id)->pluck('id')[0];

        return view('components.applicant-form', compact('agency_name', 'agency_id'));
    }

    public function store(CandidateStoreRequest $request)
    {
        $faker = Factory::create();
        $code  = $faker->hexColor;

        $candidate               = new Candidate();
        $candidate->code         = $code;
        $candidate->agency_id    = $request->agency_id;
        $candidate->passport     = $request->passport;
        $candidate->position_1   = $request->position_1;
        $candidate->position_2   = $request->position_2;
        $candidate->position_3   = $request->position_3;
        $candidate->first_name   = $request->first_name;
        $candidate->middle_name  = $request->middle_name;
        $candidate->last_name    = $request->last_name;
        $candidate->language     = $request->language;
        $candidate->birth_date   = $request->birth_date;
        $candidate->gender       = $request->gender;
        $candidate->civil_status = $request->civil_status;
        $candidate->spouse       = $request->spouse;
        $candidate->blood_type   = $request->blood_type;
        $candidate->height       = $request->height;
        $candidate->weight       = $request->weight;
        $candidate->religion     = $request->religion;
        $candidate->mother_name  = $request->mother_name;
        $candidate->father_name  = $request->father_name;
        $candidate->contact_1    = $request->contact_1;
        $candidate->contact_2    = $request->contact_2;
        $candidate->email        = $request->email;
        $candidate->address      = $request->address;
        $candidate->save();

        $path = $request->file('cv')->store('cv');

        $doc               = new Document();
        $doc->candidate_id = $candidate->id;
        $doc->path         = $path;
        $doc->type         = 'CV';
        $doc->save();

        return redirect()
            ->route('candidate.new', ['id' => $request->agency_id])
            ->with('success',
                "Please remember this SECRET CODE: $code"
            );
    }

    public function show()
    {
        return view('components.applicant-edit');
    }
}