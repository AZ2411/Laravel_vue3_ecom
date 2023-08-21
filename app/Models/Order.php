<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'status',
        'active_ph_number'
    ];
    public function user()
    {
        return $this->hasOne(User::class);
    }
    public function orderitems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
