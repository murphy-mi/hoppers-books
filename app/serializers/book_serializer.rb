class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :author_id, :genre_id
end
