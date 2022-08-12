class Api::V1::HomeController < ApplicationController
before_action :set_price, only: [:show, :edit, :update, :destroy]

# GET /prices
# GET /prices.json
def index
    @prices = Price.all
    render json: @prices
end

# GET /prices/1
# GET /prices/1.json
def show
    if @price
    render json: @price
    else
    render json: @price.errors
    end
end

# GET /prices/new
def new
    @price = Price.new
end

# GET /prices/1/edit
def edit
end

# POST /prices
# POST /prices.json
def create
    @price = Price.new(price_params)


    if @price.save
    render json: @price
    else
    render json: @price.errors
    end
end

# PATCH/PUT /prices/1
# PATCH/PUT /prices/1.json
def update
end

# DELETE /prices/1
# DELETE /prices/1.json
def destroy
    @price.destroy

    render json: { notice: 'Price was successfully removed.' }
end

private
    # Use callbacks to share common setup or constraints between actions.
    def set_price
    @price = Price.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def price_params
    params.permit(:brand, :style, :country, :quantity)
    end
end

