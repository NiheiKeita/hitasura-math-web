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

    public function factorizationVsPrimeFactorization(): Response
    {
        return Inertia::render('Web/Articles/FactorizationVsPrimeFactorization');
    }

    public function factorizationVsExpansion(): Response
    {
        return Inertia::render('Web/Articles/FactorizationVsExpansion');
    }

    public function gcdVsLcm(): Response
    {
        return Inertia::render('Web/Articles/GcdVsLcm');
    }

    public function fractionReductionVsCommonDenominator(): Response
    {
        return Inertia::render('Web/Articles/FractionReductionVsCommonDenominator');
    }

    public function gcdBasics(): Response
    {
        return Inertia::render('Web/Articles/GcdBasics');
    }

    public function lcmBasics(): Response
    {
        return Inertia::render('Web/Articles/LcmBasics');
    }

    public function juniorHighMathGuide(): Response
    {
        return Inertia::render('Web/Articles/JuniorHighMathGuide');
    }

    public function highSchoolMathGuide(): Response
    {
        return Inertia::render('Web/Articles/HighSchoolMathGuide');
    }

    public function aboutHitasuraMath(): Response
    {
        return Inertia::render('Web/Articles/AboutHitasuraMath');
    }
}
