<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $fillable = ['user_id', 'name', 'description', 'slug', 'profile', 'banner'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
