class BestSellersController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        book_ids = BestSeller.pluck(:book_id)
        best_sellers = book_ids.map {|id| Book.find(id)}
        render json: best_sellers, status: :ok
    end
    
end
