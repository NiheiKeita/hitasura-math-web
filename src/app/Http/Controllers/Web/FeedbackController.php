<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Inertia\Inertia;
use Inertia\Response;

class FeedbackController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Web/Feedback', [
            'categories' => Feedback::CATEGORIES,
            'platforms' => Feedback::PLATFORMS,
        ]);
    }
}
