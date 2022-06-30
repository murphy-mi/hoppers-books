class WishlistsController < ApplicationController

    def index
        wishlists = Wishlist.all
        render json: wishlists, status: :ok
    end

    def show
        wishlist = Wishlist.find(params[:id])
        render json: wishlist, status: :ok
    end

end
