<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasUuids;

    protected $table = 'feedback';

    public const CATEGORIES = [
        'improvement',
        'feature',
        'bug',
        'feedback',
        'other',
    ];

    public const PLATFORMS = [
        'ios',
        'android',
        'web',
        'unknown',
    ];

    public const STATUSES = [
        'new',
        'reviewing',
        'resolved',
    ];

    protected $fillable = [
        'category',
        'message',
        'email',
        'platform',
        'app_version',
        'device_os',
        'status',
        'admin_memo',
        'user_agent',
        'ip_hash',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
