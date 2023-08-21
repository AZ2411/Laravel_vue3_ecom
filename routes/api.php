<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryApiController;
use App\Http\Controllers\OrderController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// Category Api
Route::apiResource('categories', CategoryController::class);
//Product Api
Route::apiResource('products', ProductController::class);
Route::post('/products_update/{id}', [ProductController::class, 'update']);
//Order Api
Route::apiResource('orders', OrderController::class);


