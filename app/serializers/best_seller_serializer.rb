class BestSellerSerializer < ActiveModel::Serializer
  attributes :id, :book_id
  has_one :book
end
