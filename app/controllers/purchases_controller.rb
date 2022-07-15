class PurchasesController < ApplicationController

    skip_before_action :authorize

    def index
        purchases = Purchase.all
        render json: purchases, status: :ok
    end

    def show
        purchase = Purchase.find(params[:id])
        render json: purchase, status: :ok
    end

    def create
        purchase = Purchase.create(purchase_params)
        render json: purchase, status: :created
    end

    private

    def purchase_params
        params.permit(:book_id, :user_id)
    end

end
