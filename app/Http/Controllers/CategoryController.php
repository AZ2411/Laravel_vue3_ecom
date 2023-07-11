<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\CategoryResource;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {

            $categories = Category::paginate(10);
            return response()->json([
                'category' => $categories,
                
            ]);
            // return CategoryResource::collection($categories);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = Category::create([
            'category' => $request->category
        ]);
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return new CategoryResource(Category::findOrFail($id));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->category = $request->category;
        $category->update();
        return new CategoryResource($category); //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        $category->delete();
        return response()->json([
            'message' => 'Category Deleted Successfully!!'
        ]);
    }
}