# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..."

u1 = User.create(username: "hagay", password: "password", admin: true)
u2 = User.create(username: "username", password: "password", admin: true)


# b1 = Book.create(title: "Where The Sidewalk Ends", author_id: a1.id, genre_id: g1.id)
# b2 = Book.create(title: "Crash", author_id: a2.id, genre_id: g2.id)

# w1 = Wishlist.create(book_id: b1.id, user_id: u1.id)
# w2 = Wishlist.create(book_id: b2.id, user_id: u1.id)

puts "Done seeding!"
