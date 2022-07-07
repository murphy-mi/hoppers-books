class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :admin
  has_many :wishlists
  has_many :purchases
end
