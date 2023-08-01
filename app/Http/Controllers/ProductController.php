<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $productsPerPage = 4;
            $search_error_message = null;
            if ($request->name) {
                $products_for_pagination = Product::where('brand', 'like', '%' . $request->name . '%')->orWhere('name', 'like', '%' . $request->name . '%')->paginate($productsPerPage);
                $products = ProductResource::collection(Product::where('brand', 'like', '%' . $request->name . '%')->orWhere('name', 'like', '%' . $request->name . '%')->paginate($productsPerPage));
                if (count($products) == 0) {
                    $search_error_message = 'Apologies for the inconvenience caused. It appears that the search results for the specific products you were looking for are currently unavailable or not found in the system';
                }
            }elseif ($request->status == 'all') {
                $products = ProductResource::collection(Product::all());
                $products_for_pagination = null;
            }else {
                $products_for_pagination = Product::paginate($productsPerPage);
                $products = ProductResource::collection(Product::paginate($productsPerPage));
            }
            return response()->json([
                'products' => $products,
                'products_for_pagination' => $products_for_pagination,
                'search_error_message' => $search_error_message,
            ]);
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
        $validator = Validator::make(request()->all(), [
            'name' => 'required|unique:products',
            'description' => 'required',
            'brand' => 'required',
            'qty' => 'required',
            'price' => 'required',
            'profile' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ]);
        }
        
        
            if ($request->qty > 0) {
                $status = 'Instock';
            } else {
                $status = 'Outstock';
            }
            $product = new Product;
            $product->brand = $request->brand;
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->qty = $request->qty;
            $product->status = $status;
            $product->created_by = $request->user;
            $product->save();
            if ($request->hasFile("profile")) {
                $tfmessage = 'file is true';
                $file = $request->file("profile");
                $path = public_path("images/products/" . $product->id);
                $fileName = "product" . $product->id . "." . $file->getClientOriginalExtension();
                if (File::exists($path)) {
                    File::deleteDirectory($path);
                }
                File::makeDirectory($path);
                $file->move($path, $fileName);
                $product->profile = $fileName;
                $product->save();
    
            }
            $product->categories()->attach($request->categories);
            return new ProductResource($product);
       
        
        
        // return response()->json([
        //     'data' => [],
        //     'status' => Response::HTTP_CREATED,
        // ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);

        return response()->json([
            'message' => "ok",
            'name' => $product->name,
            'profile' => 'http://localhost:8000/images/products/' . $product->id . "/" . $product->profile,
            'success' => 'file is successful'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json([
            'message' => 'Product Deleted Successfully!!'
        ]);
    }
}