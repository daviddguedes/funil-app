<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visitors extends Model
{
    protected $fillable = [
        'firstName', 'emailAddress', 'phoneNumber', 'gender'
    ];
}
