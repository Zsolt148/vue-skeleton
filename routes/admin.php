<?php

// Admin routes

use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Admin/Dashboard');
})->name('dashboard');

//users
Route::resource('users', UsersController::class)->only('index', 'edit', 'update', 'destroy');
