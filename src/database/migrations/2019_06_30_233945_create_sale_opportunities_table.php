<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSaleOpportunitiesTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_opportunities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('sale_id');
            $table->unsignedBigInteger('opportunitie_id');
            $table->timestamps();

            $table->foreign('sale_id')
                ->references('id')
                ->on('sales')
                ->onDelete('cascade');
            
            $table->foreign('opportunitie_id')
                ->references('id')
                ->on('opportunities')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sale_opportunities');
    }
}
