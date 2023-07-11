<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryApiController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
//Category Api
// Route::get('/categories/{status}', [CategoryApiController::class, 'index']);
// Route::get('/categories/{id}', [CategoryApiController::class, 'show']);

// Route::post('/categories_create', [CategoryApiController::class, 'store']);
// Route::delete('/category/{id}', [CategoryApiController::class, 'destroy']);
// Route::post('/category_update/{id}', [CategoryApiController::class, 'update']);

    
// Category Api
Route::apiResource('categories', CategoryController::class);

//Product Api
Route::apiResource('products', ProductController::class);
// Route::get('/products', [ProductController::class, 'index']);
// Route::post('/products_create', [ProductController::class, 'store']);


