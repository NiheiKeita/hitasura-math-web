<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\DashboardController;
use App\Http\Controllers\Web\FeedbackController as WebFeedbackController;
use App\Http\Controllers\Web\ArticlesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'basicauth'], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('web.top');
    Route::get('feedback', [WebFeedbackController::class, 'index'])->name('web.feedback');
    Route::get('articles', [ArticlesController::class, 'index'])->name('web.articles');
    Route::get('articles/factorization-study', [ArticlesController::class, 'factorizationStudy'])
        ->name('web.articles.factorization-study');
    Route::get('articles/prime-factorization-study', [ArticlesController::class, 'primeFactorizationStudy'])
        ->name('web.articles.prime-factorization-study');
    Route::get('articles/differential-study', [ArticlesController::class, 'differentialStudy'])
        ->name('web.articles.differential-study');
    Route::get('articles/integration-study', [ArticlesController::class, 'integrationStudy'])
        ->name('web.articles.integration-study');
    Route::get('articles/differential-vs-integration', [ArticlesController::class, 'differentialVsIntegration'])
        ->name('web.articles.differential-vs-integration');
    Route::get('articles/factorization-vs-prime-factorization', [ArticlesController::class, 'factorizationVsPrimeFactorization'])
        ->name('web.articles.factorization-vs-prime-factorization');
    Route::get('articles/factorization-vs-expansion', [ArticlesController::class, 'factorizationVsExpansion'])
        ->name('web.articles.factorization-vs-expansion');
    Route::get('articles/gcd-vs-lcm', [ArticlesController::class, 'gcdVsLcm'])
        ->name('web.articles.gcd-vs-lcm');
    Route::get('articles/fraction-reduction-vs-common-denominator', [ArticlesController::class, 'fractionReductionVsCommonDenominator'])
        ->name('web.articles.fraction-reduction-vs-common-denominator');
    Route::get('articles/gcd-basics', [ArticlesController::class, 'gcdBasics'])
        ->name('web.articles.gcd-basics');
    Route::get('articles/lcm-basics', [ArticlesController::class, 'lcmBasics'])
        ->name('web.articles.lcm-basics');
    Route::get('articles/junior-high-math-guide', [ArticlesController::class, 'juniorHighMathGuide'])
        ->name('web.articles.junior-high-math-guide');
    Route::get('articles/high-school-math-guide', [ArticlesController::class, 'highSchoolMathGuide'])
        ->name('web.articles.high-school-math-guide');
    Route::get('articles/about-hitasura-math', [ArticlesController::class, 'aboutHitasuraMath'])
        ->name('web.articles.about-hitasura-math');

    Route::fallback(function () {
        return redirect(route('web.top'));
    });
});
