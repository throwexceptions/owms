<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlertLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alert_levels', function (Blueprint $table) {
            $table->id();
            $table->string('name', 200)->nullable();
            $table->string('color_level', 200)->nullable();
            $table->string('description', 200)->nullable();
            $table->string('created_by', 200)->nullable();
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
        Schema::dropIfExists('alert_levels');
    }
}
