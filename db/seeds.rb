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

Book.create(title: "Star Wars I", price: 5.70, author: "Luke", genre: "Science-Fiction", image: "https://i.pinimg.com/originals/bb/84/be/bb84be317811f35a8f2134404ed5ab34.jpg" )
Book.create(title: "Star Wars II", price: 6.30, author: "Chewbacca", genre: "Science-Fiction", image: "https://i5.walmartimages.com/asr/0c06775c-3274-48ec-b014-1ce57d3ef7de_1.f1273965ef51cbe16f4ddb83a1db1dd8.jpeg" )
Book.create(title: "Star Wars III", price: 6.10, author: "Leia", genre: "Science-Fiction", image: "http://theassociation.blogs.com/the_association/images/2007/10/09/squatch_dunking_2.jpg" )
Book.create(title: "Star Wars IV", price: 4.11, author: "Obi-Wan", genre: "Science-Fiction", image: "https://cdn.shopify.com/s/files/1/0068/2970/3227/products/davis_w810wicketewok_1_X.jpg?v=1566849311" )
Book.create(title: "Star Wars V", price: 10.53, author: "Greedo", genre: "Science-Fiction", image: "https://www.si.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTY4MTI2MDI5MDcwOTM1MzEz/40-star-wars-sports-galleryjpg.jpg" )

BestSeller.create(book_id: 1)
BestSeller.create(book_id: 2)
BestSeller.create(book_id: 3)
BestSeller.create(book_id: 4)
BestSeller.create(book_id: 5)
# b1 = Book.create(title: "Where The Sidewalk Ends", author_id: a1.id, genre_id: g1.id)
# b2 = Book.create(title: "Crash", author_id: a2.id, genre_id: g2.id)

# w1 = Wishlist.create(book_id: b1.id, user_id: u1.id)
# w2 = Wishlist.create(book_id: b2.id, user_id: u1.id)

puts "Done seeding!"
