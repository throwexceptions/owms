<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();
            $table->string('agency_id', 200)->nullable();
            $table->string('agent_id', 200)->nullable();
            $table->string('employer_id', 200)->nullable();
            $table->string('code', 200)->nullable();
            $table->string('photo_url', 200)->nullable();
            $table->string('first_name', 200)->nullable();
            $table->string('last_name', 200)->nullable();
            $table->string('middle_name', 200)->nullable();
            $table->string('email', 200)->nullable();
            $table->string('position_1', 200)->nullable();
            $table->string('position_2', 200)->nullable();
            $table->string('position_3', 200)->nullable();
            $table->string('contact_1', 200)->nullable();
            $table->string('contact_2', 200)->nullable();
            $table->text('address')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('civil_status', 200)->nullable();
            $table->string('gender', 200)->nullable();
            $table->string('blood_type', 200)->nullable();
            $table->string('height', 200)->nullable();
            $table->string('weight', 200)->nullable();
            $table->string('religion', 200)->nullable();
            $table->string('language', 200)->nullable();
            $table->string('passport', 200)->nullable();
            $table->string('education', 200)->nullable();
            $table->string('spouse', 200)->nullable();
            $table->string('mother_name', 200)->nullable();
            $table->string('father_name', 200)->nullable();
            $table->string('status', 200)->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('candidates');
    }
}