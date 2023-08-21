<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Product extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'name',
        'brand',
        'profile',
        'description',
        'price',
        'qty',
        'status',
        'created_by'
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    public function orderitem()
    {
        return $this->belongsTo(OrderItem::class);
    }
}
