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

# Hardcover Nonfiction
Book.create(title: "The Hotel Nantucket", price: 5.70, author: "Elin Hilderbrand", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780316258678.jpg" )
Book.create(title: "Sparring Partners", price: 6.30, author: "John Grisham", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780385549325.jpg" )
Book.create(title: "Suspects", price: 6.10, author: "Danielle Steel", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9781984821676.jpg" )
Book.create(title: "The House Across The Lake", price: 4.11, author: "Riley Sager", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780593183199.jpg" )
Book.create(title: "Escape", price: 10.53, author: "James Patterson", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780316499446.jpg" )

BestSeller.create(book_id: 1, list: "Hardcover Fiction")
BestSeller.create(book_id: 2, list: "Hardcover Fiction")
BestSeller.create(book_id: 3, list: "Hardcover Fiction")
BestSeller.create(book_id: 4, list: "Hardcover Fiction")
BestSeller.create(book_id: 5, list: "Hardcover Fiction")

# Hardcover Fiction
Book.create(title: "The Hotel Nantucket", price: 5.70, author: "Elin Hilderbrand", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780316258678.jpg" )
Book.create(title: "Sparring Partners", price: 6.30, author: "John Grisham", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780385549325.jpg" )
Book.create(title: "Suspects", price: 6.10, author: "Danielle Steel", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9781984821676.jpg" )
Book.create(title: "The House Across The Lake", price: 4.11, author: "Riley Sager", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780593183199.jpg" )
Book.create(title: "Star Wars V", price: 10.53, author: "James Patterson", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780316499446.jpg" )

BestSeller.create(book_id: 6, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 7, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 8, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 9, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 10, list: "Hardcover Nonfiction")


# w1 = Wishlist.create(book_id: b1.id, user_id: u1.id)
# w2 = Wishlist.create(book_id: b2.id, user_id: u1.id)

puts "Done seeding!"
