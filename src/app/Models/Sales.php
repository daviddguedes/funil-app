<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    protected $fillable = ['visitor_id'];
    
    public function visitor() {
        return $this->belongsTo('\App\Models\Visitors', 'visitor_id');
    }
    
    public function saleOpportunities() {
        return $this->hasMany('\App\Models\SaleOpportunitie', 'sale_id');
    }
}
