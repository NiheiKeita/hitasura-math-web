<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ArticlesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Web/Articles');
    }

    public function factorizationStudy(): Response
    {
        return Inertia::render('Web/Articles/FactorizationStudy');
    }
}
