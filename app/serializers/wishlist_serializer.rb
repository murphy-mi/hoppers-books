class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :user_id
end
