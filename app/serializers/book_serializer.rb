class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :author, :genre, :image
end
