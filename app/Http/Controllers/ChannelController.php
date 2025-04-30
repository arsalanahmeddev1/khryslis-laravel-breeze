<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChannelController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'profile' => 'nullable|image',
            'banner' => 'nullable|image',
        ]);

        $profilePath = null;
        $bannerPath = null;

        if ($request->hasFile('profile')) {
            $profilePath = $request->file('profile')->store('profiles', 'public');
        }

        if ($request->hasFile('banner')) {
            $bannerPath = $request->file('banner')->store('banners', 'public');
        }

        Channel::create([
            'name' => $validated['name'],
            'slug' => Str::slug($validated['name']), 
            'user_id' => Auth::id(),
            'description' => $validated['description'] ?? null,
            'profile' => $profilePath,  
            'banner' => $bannerPath,
        ]);

        return redirect()->route('create-channel')->with('success', 'Channel created!');
    }
}
