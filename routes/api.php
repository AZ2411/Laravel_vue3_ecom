<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryApiController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// Category Api
Route::apiResource('categories', CategoryController::class);
//Product Api
Route::apiResource('products', ProductController::class);

//Category Api
// Route::get('/categories/{status}', [CategoryApiController::class, 'index']);
// Route::get('/categories/{id}', [CategoryApiController::class, 'show']);

// Route::post('/categories_create', [CategoryApiController::class, 'store']);
// Route::delete('/category/{id}', [CategoryApiController::class, 'destroy']);
// Route::post('/category_update/{id}', [CategoryApiController::class, 'update']);

// Route::get('/products', [ProductController::class, 'index']);
// Route::post('/products_create', [ProductController::class, 'store']);

