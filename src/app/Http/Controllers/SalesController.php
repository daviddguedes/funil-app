<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\SaleOpportunitie;

class SalesController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $retorno = Sales::with([
            'visitor',
            'saleOpportunities.Opportunitie'
        ])->get();

        return response()->json([
            'result' => $retorno
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'opportunitie_id' => 'required',
            'visitor_id' => 'required'
        ]);

        $sale = Sales::create($request->except('opportunitie_id'));
        $opportunitie = new SaleOpportunitie();
        $opportunitie->sale_id = $sale->id;
        $opportunitie->opportunitie_id = $request->opportunitie_id;
        $opportunitie->save();
        return response()->json([
            'result' => $sale
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
