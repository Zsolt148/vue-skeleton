<?php

// Admin routes

use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Jetstream\Http\Controllers\Inertia\CurrentUserController;
use Laravel\Jetstream\Http\Controllers\Inertia\OtherBrowserSessionsController;
use Laravel\Jetstream\Http\Controllers\Inertia\ProfilePhotoController;
use Laravel\Jetstream\Http\Controllers\Inertia\UserProfileController;
use Laravel\Jetstream\Jetstream;

Route::get('/', function () {
    return Inertia::render('Admin/Dashboard');
})->name('dashboard');

// Users
Route::resource('users', UsersController::class)->only('index', 'edit', 'update', 'destroy');

// Current User & Profile...
Route::get('/user/profile', [UserProfileController::class, 'show'])
    ->name('profile.show');

Route::delete('/user/other-browser-sessions', [OtherBrowserSessionsController::class, 'destroy'])
    ->name('other-browser-sessions.destroy');

Route::delete('/user/profile-photo', [ProfilePhotoController::class, 'destroy'])
    ->name('current-user-photo.destroy');

if (Jetstream::hasAccountDeletionFeatures()) {
    Route::delete('/user', [CurrentUserController::class, 'destroy'])
        ->name('current-user.destroy');
}
