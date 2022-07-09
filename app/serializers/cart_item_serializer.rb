class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id
  has_one :book
  has_one :user
end
