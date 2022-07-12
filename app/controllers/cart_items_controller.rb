class CartItemsController < ApplicationController

    skip_before_action :authorize

    def index
        cart_items = CartItem.all
        render json: cart_items, status: :ok
    end

    def show
        cart_item = find_cart_item
        render json: cart_item, status: :ok
    end

    def create
        cart_item = CartItem.create(cart_item_params)
        render json: cart_item, status: :created
    end

    def destroy
        cart_item = find_cart_item
        cart_item.destroy
        head :no_content
    end

    private

    def find_cart_item
        CartItem.find(params[:id])
    end
    def cart_item_params
        params.permit(:book_id, :user_id)
    end

end
