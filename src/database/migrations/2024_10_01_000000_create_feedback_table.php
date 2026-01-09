<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('feedback', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->timestamps();
            $table->string('category', 50);
            $table->text('message');
            $table->string('email', 255)->nullable();
            $table->string('platform', 20)->nullable();
            $table->string('app_version', 50)->nullable();
            $table->string('device_os', 50)->nullable();
            $table->string('status', 20)->default('new');
            $table->text('admin_memo')->nullable();
            $table->text('user_agent')->nullable();
            $table->string('ip_hash', 64)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
