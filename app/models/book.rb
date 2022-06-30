class Book < ApplicationRecord
    validates :author, presence: true
    validates :genre, presence: true
    has_many :purchases
    has_many :wishlists
    has_many :users, through: :purchases
    has_many :users, through: :wishlists
    belongs_to :author
    belongs_to :genre
end
