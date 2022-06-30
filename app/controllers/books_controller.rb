class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books, status: :ok
    end

    def show
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

end
