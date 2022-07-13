class WishlistsController < ApplicationController

    skip_before_action :authorize
    
    def index
        wishlists = Wishlist.all
        render json: wishlists, status: :ok
    end

    def show
        wishlist = Wishlist.find(params[:id])
        render json: wishlist, status: :ok
    end

    def create
        wishlist = Wishlist.create(wishlist_params)
        render json: wishlist, status: :created
    end

    private

    def wishlist_params
        params.permit(:book_id, :user_id)
    end

end
