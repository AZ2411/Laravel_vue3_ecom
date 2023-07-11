<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\CategoryResource;

class CategoryApiController extends Controller
{
    public function index($status)
    {
       
        try {
            dd($status);
            // $categories = Category::all();
            if ($status) {
                $hello = '1234';
            
                # code...
            }else {
                # code...
            };
            $categories = Category::paginate(6);

            return CategoryResource::collection($categories);
        } catch (\Throwable $th) {
            //throw $th;
        }

    }
    public function show($id)
    {
        return new CategoryResource(Category::findOrFail($id));
    }
    public function store(Request $request)
    {
        $category = Category::create([
            'category' => $request->category
        ]);
        return new CategoryResource($category);
    }
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        return response()->json([
            'message' => 'Category Deleted Successfully!!'
        ]);
    }
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->category = $request->category;
        $category->update();
        return new CategoryResource($category);
    }

}