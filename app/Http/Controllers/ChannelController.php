<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'profile' => 'nullable|image|max:2048',
            'banner' => 'nullable|image|max:2048',
        ]);

        $slug = Str::slug($request->name);

        // Ensure slug uniqueness
        $count = Channel::where('slug', 'like', "$slug%")->count();
        if ($count > 0) {
            $slug .= '-' . ($count + 1);
        }

        $profilePath = null;
        $bannerPath = null;
        if ($request->hasFile('profile')) {
            $profilePath = $request->file('profile')->store('channel-profiles', 'public');
        }
        if ($request->hasFile('banner')) {
            $bannerPath = $request->file('banner')->store('channel-banners', 'public');
        }

        $channel = Channel::create([
            'user_id' => auth()->id(),
            'name' => $request->name,
            'description' => $request->description,
            'slug' => $slug,
            'profile' => $profilePath,
            'banner' => $bannerPath,
        ]);

        return redirect()->route('channels.show', $channel->slug)->with('success', 'Channel created successfully.');
    }
}
