class Book < ApplicationRecord
    # validates :author, presence: true
    # validates :genre, presence: true
    has_many :purchases
    has_many :wishlists
    has_many :users, through: :purchases
    has_many :users, through: :wishlists

    validates :title, presence: true, uniqueness: true
end
