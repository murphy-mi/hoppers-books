class User < ApplicationRecord
    has_many :purchases
    has_many :wishlists
    has_many :books, through: :wishlists
    has_many :books, through: :purchases

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
