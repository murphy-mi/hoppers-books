class GenresController < ApplicationController

    def index
        genres = Genre.all
        render json: genres, status: :ok
    end

    def show
        genre = Genre.find(params[:id])
        render json: genre, status: :ok
    end

end
