class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :user_id
  has_one :book
  has_one :user
end
