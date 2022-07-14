class UsersController < ApplicationController

    skip_before_action :authorize, only: [:index, :create]
    
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        # byebug
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :admin)
    end

end
