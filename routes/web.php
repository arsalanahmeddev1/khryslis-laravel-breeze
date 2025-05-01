<?php

use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// pages 
Route::get('/blips', function () {
    return Inertia::render('Blips');
})->name('blips');

Route::get('/channel', function () {
    return Inertia::render('Channelpage');
})->name('channel');

Route::get('/subscriptions', function () {
    return Inertia::render('Subscriptions');
})->name('subscriptions');

Route::get('/history', function () {
    return Inertia::render('History');
})->name('history');

Route::get('/liked', function () {
    return Inertia::render('liked');
})->name('liked');

Route::get('/trending', function () {
    return Inertia::render('Trending');
})->name('trending');

Route::get('/music', function () {
    return Inertia::render('music');
})->name('music');

Route::get('/gaming', function () {
    return Inertia::render('GamingPage');
})->name('gaming');

Route::get('/news', function () {
    return Inertia::render('news');
})->name('news');

// settings page
Route::get('/settings/{section?}', function ($section = 'account') {
    return Inertia::render('SettingsPage', [
        'section' => $section
    ]);
});

// studio pages
Route::get('/create-channel', function () {
    return Inertia::render('CreateChannel');
})->name('create-channel');

Route::get('/studio/content', function () {
    return Inertia::render('studio/Content');
})->name('studio.content');

Route::get('/studio/dashboard', function () {
    return Inertia::render('studio/Dashboard');
})->name('studio.dashboard');


Route::middleware(['auth', 'verified'])->prefix('settings')->group(function () {
    Route::get('/', fn() => Inertia::render('SettingsPage'))->name('settings');
    Route::get('/account', fn() => Inertia::render('SettingsPage'))->name('settings.account');
    Route::get('/notifications', fn() => Inertia::render('SettingsPage'))->name('settings.notifications');
    Route::get('/privacy', fn() => Inertia::render('SettingsPage'))->name('settings.privacy');
    Route::get('/playback', fn() => Inertia::render('SettingsPage'))->name('settings.playback');
    Route::get('/appearance', fn() => Inertia::render('SettingsPage'))->name('settings.appearance');
    Route::get('/downloads', fn() => Inertia::render('SettingsPage'))->name('settings.downloads');
    Route::get('/advanced', fn() => Inertia::render('SettingsPage'))->name('settings.advanced');
});

Route::post('/channels', [ChannelController::class, 'store'])->name('channels.store');

require __DIR__.'/auth.php';
