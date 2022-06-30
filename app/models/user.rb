class User < ApplicationRecord
    has_many :purchases
    has_many :wishlists
    has_many :books, through :wishlists
    has_many :books, through :purchases
end
