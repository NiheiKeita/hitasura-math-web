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

    public function primeFactorizationStudy(): Response
    {
        return Inertia::render('Web/Articles/PrimeFactorizationStudy');
    }

    public function differentialStudy(): Response
    {
        return Inertia::render('Web/Articles/DifferentialStudy');
    }

    public function integrationStudy(): Response
    {
        return Inertia::render('Web/Articles/IntegrationStudy');
    }

    public function differentialVsIntegration(): Response
    {
        return Inertia::render('Web/Articles/DifferentialVsIntegration');
    }
}
