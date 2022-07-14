class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    before_action :authorize

    # def count
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: {count: session[:count]}
    # end

    private


    def authorize
        session[:test] = "test"

        @current_user = User.find_by(id: session[:user_id])

        # byebug

        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def render_not_found
        render json: {error: "Not found"}, status: 404
    end

    def render_invalid(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
