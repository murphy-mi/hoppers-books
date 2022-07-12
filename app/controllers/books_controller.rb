class BooksController < ApplicationController

    skip_before_action :authorize


    def index
        books = Book.all
        render json: books, status: :ok
    end

    def show
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

    def create
        book = Book.create(book_params)
        render json: book, status: :created
    end

    private

    def book_params
        params.permit(:title, :price, :author, :genre, :image)
    end

end
