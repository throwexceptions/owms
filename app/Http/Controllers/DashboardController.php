<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Agency;
use App\Models\ContractSW;
use App\Models\ContractHSW;
use App\Events\SendMessageEvent;
use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;
use App\Http\Requests\StoreSWRequest;
use App\Http\Requests\StoreHSWRequest;

class DashboardController extends Controller
{
    public function index()
    {
        if (\Gate::has('admin') && \Gate::has('gov')) {
            return $this->adminView();
        } else {
            return view('complain');
        }
    }

    public function adminView()
    {

        $employerLateRp = DB::select(DB::raw(/** @lang mysql */ "select *
            from (
                 Select
                 distinct reports.candidate_id,
                 max(reports.created_at) as latest_dated_report,
                 reports.created_by
            from reports
            join candidates c on reports.candidate_id = c.id
            where reports.created_by = 'employer'
            and c.deployed = 'yes'
            group by reports.candidate_id, reports.created_by
            order by reports.candidate_id
                     ) as cildrcb
            where TIMESTAMPDIFF(MONTH, cildrcb.latest_dated_report, NOW()) > 2")
        );

        $employerLateRpCnt = count($employerLateRp);

        $employeeLateRp = DB::select(DB::raw(/** @lang mysql */ "select *
            from (
                 Select
                 distinct reports.candidate_id,
                 max(reports.created_at) as latest_dated_report,
                 reports.created_by
            from reports
            join candidates c on reports.candidate_id = c.id
            where reports.created_by = 'employer'
            and c.deployed = 'yes'
            group by reports.candidate_id, reports.created_by
            order by reports.candidate_id
                     ) as cildrcb
            where TIMESTAMPDIFF(MONTH, cildrcb.latest_dated_report, NOW()) > 2")
        );

        $employeeLateRpCnt = count($employeeLateRp);

        return view('dashboard', compact('employerLateRpCnt', 'employerLateRp', 'employeeLateRp', 'employeeLateRp'));
    }

    public function blocked()
    {
        $agency = Agency::query()->where('id', auth()->user()->agency_id)->first();

        return view('blocked', compact('agency'));
    }

    public function storeSW(StoreSWRequest $request)
    {
        ContractSW::create([
            "employer_name"      => $request->employer_name,
            "employer_address"   => $request->employer_address,
            "po_box_no"          => $request->po_box_no,
            "telephone"          => $request->telephone,
            "fax"                => $request->fax,
            "employee_name"      => $request->employee_name,
            "cs_status"          => $request->cs_status,
            "passport_no"        => $request->passport_no,
            "date_issued"        => $request->date_issued,
            "place_issued"       => $request->place_issued,
            "employee_address"   => $request->employee_address,
            "site_of_employment" => $request->site_of_employment,
            "employee_position"  => $request->employee_position,
            "salary"             => $request->salary,
            "witness_day"        => $request->witness_day,
            "witness_month"      => $request->witness_month,
            "witness_year"       => $request->witness_year,
            "witness_place"      => $request->witness_place,
            "agency_id"          => auth()->user()->agency_id,
            "approved_by"        => '',
            "status"             => 'For Approval',
        ]);

        return ['success' => true];
    }

    public function storeHSW(StoreHSWRequest $request)
    {
        ContractHSW::create([
            "employer_name"     => $request->employer_name,
            "visa_no"           => $request->visa_no,
            "address"           => $request->address,
            "street"            => $request->street,
            "district"          => $request->district,
            "city"              => $request->city,
            "cs_employer"       => $request->cs_employer,
            "no_family_members" => $request->no_family_members,
            "telephone"         => $request->telephone,
            "mobile"            => $request->mobile,
            "email"             => $request->email,
            "worker_name"       => $request->worker_name,
            "position"          => $request->position,
            "address_ph"        => $request->address_ph,
            "cs_worker"         => $request->cs_worker,
            "contact_no"        => $request->contact_no,
            "passport_no"       => $request->passport_no,
            "date_issued"       => $request->date_issued,
            "place_issued"      => $request->place_issued,
            "kin_name"          => $request->kin_name,
            "kin_address"       => $request->kin_address,
            "employment_site"   => $request->employment_site,
            "salary"            => $request->salary,
            "agency_id"         => auth()->user()->agency_id,
            "approved_by"       => '',
            "status"            => 'For Approval',
        ]);

        return ['success' => true];
    }

    public function tableSW()
    {
        return DataTables::of(ContractSW::query()->where('agency_id', auth()->user()->agency_id))
                         ->setTransformer(function ($value) {
                             $value->created_at_display = Carbon::parse($value->created_at)->format('F j, Y');
                             return collect($value)->toArray();
                         })
                         ->make(true);
    }

    public function tableHSW()
    {
        return DataTables::of(ContractHSW::query()->where('agency_id', auth()->user()->agency_id))
                         ->setTransformer(function ($value) {
                             $value->created_at_display = Carbon::parse($value->created_at)->format('F j, Y');
                             return collect($value)->toArray();
                         })
                         ->make(true);
    }
}
