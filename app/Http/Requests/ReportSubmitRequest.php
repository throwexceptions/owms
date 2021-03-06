<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReportSubmitRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "comments"        => "required",
            "salary_received" => "required",
            "salary_date"     => "required",
            "attachment_1"    => "required",
            "attachment_2"    => "required",
            "attachment_3"    => "required",
        ];
    }
}
