<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SaleOpportunitie extends Model
{
    protected $fillable = [
        'sale_id', 'opportunitie_id'
    ];
    
    public function Opportunitie() {
        return $this->hasOne('\App\Models\Opportunitie', 'id');
    }
    
    public function Sale() {
        return $this->belongsTo('\App\Models\Sales', 'sale_id');
    }
}
