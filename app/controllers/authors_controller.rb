class AuthorsController < ApplicationController

    def index
        authors = Author.all
        render json: authors, status: :ok
    end

    def show
        author = Author.find(params[:id])
        render json: author, status: :ok
    end

end
