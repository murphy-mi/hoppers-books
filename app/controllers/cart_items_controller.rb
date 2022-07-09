class CartItemsController < ApplicationController

    def index
        cart_items = CartItem.all
        render json: cart_items, status: :ok
    end

    def show
        cart_item = CartItem.find(params[:id])
        render json: cart_item, status: :ok
    end

    def create
        cart_item = CartItem.create(cart_item_params)
        render json: cart_item, status: :created
    end

    private

    def cart_item_params
        params.permit(:book_id, :user_id)
    end

end
