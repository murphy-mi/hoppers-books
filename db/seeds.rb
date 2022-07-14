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

# Hardcover Fiction
Book.create(title: "The Hotel Nantucket", price: 5.70, author: "Elin Hilderbrand", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780316258678.jpg" )
Book.create(title: "Rising Tiger", price: 6.44, author: "Brad Thor", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9781982182151.jpg" )
Book.create(title: "Tomorrow, And Tomorrow, And Tomorrow", price: 7.79, author: "Gabrielle Zevin", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780593321201.jpg" )
Book.create(title: "Sparring Partners", price: 6.30, author: "John Grisham", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780385549325.jpg" )
Book.create(title: "The Midnight Library", price: 6.10, author: "Matt Haig", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg" )

Book.create(title: "Lessons In Chemistry", price: 4.11, author: "Bonnie Garmus", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg" )
Book.create(title: "Suspects", price: 6.75, author: "Danielle Steel", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9781984821676.jpg" )
Book.create(title: "Escape", price: 10.53, author: "James Patterson", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780316499446.jpg" )
Book.create(title: "The Last Thing He Told Me", price: 11.97, author: "Laura Dave", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg" )
Book.create(title: "The House Across The Lake", price: 4.11, author: "Riley Sager", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780593183199.jpg" )

Book.create(title: "The Measure", price: 9.08, author: "Nikki Erlick", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780063204201.jpg" )
Book.create(title: "Horse", price: 5.94, author: "Geraldine Brooks", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780399562969.jpg" )
Book.create(title: "The Paris Apartment", price: 4.69, author: "Lucy Foley", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780063003057.jpg" )
Book.create(title: "Meant To Be", price: 9.36, author: "Emily Giffin", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9780425286647.jpg" )
Book.create(title: "One Italian Summer", price: 8.83, author: "Rebecca Serle", genre: "Hardcover Fiction", image: "https://storage.googleapis.com/du-prd/books/images/9781982166793.jpg" )

# Hardcover Fiction
BestSeller.create(book_id: 1, list: "Hardcover Fiction")
BestSeller.create(book_id: 2, list: "Hardcover Fiction")
BestSeller.create(book_id: 3, list: "Hardcover Fiction")
BestSeller.create(book_id: 4, list: "Hardcover Fiction")
BestSeller.create(book_id: 5, list: "Hardcover Fiction")

BestSeller.create(book_id: 6, list: "Hardcover Fiction")
BestSeller.create(book_id: 7, list: "Hardcover Fiction")
BestSeller.create(book_id: 8, list: "Hardcover Fiction")
BestSeller.create(book_id: 9, list: "Hardcover Fiction")
BestSeller.create(book_id: 10, list: "Hardcover Fiction")

BestSeller.create(book_id: 11, list: "Hardcover Fiction")
BestSeller.create(book_id: 12, list: "Hardcover Fiction")
BestSeller.create(book_id: 13, list: "Hardcover Fiction")
BestSeller.create(book_id: 14, list: "Hardcover Fiction")
BestSeller.create(book_id: 15, list: "Hardcover Fiction")

# Hardcover Nonfiction
Book.create(title: "Battle For The American Mind", price: 7.61, author: "Pete Hegseth", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780063215047.jpg" )
Book.create(title: "Finding Me", price: 4.95, author: "Viola Davis", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780063037328.jpg" )
Book.create(title: "Happy-Go-Lucky", price: 7.50, author: "David Sedaris", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780316392457.jpg" )
Book.create(title: "Killing The Killers", price: 6.62, author: "Bill O'Reilly", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9781250279255.jpg" )
Book.create(title: "An Immense World", price: 8.98, author: "Ed Yong", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780593133231.jpg" )

Book.create(title: "Crying In H Mart", price: 4.80, author: "Michelle Zauner", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg" )
Book.create(title: "Leadership", price: 5.71, author: "Henry Kissinger", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780593489444.jpg" )
Book.create(title: "Why We Did It", price: 10.84, author: "Tim Miller", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780063161474.jpg" )
Book.create(title: "Invisible Storm", price: 11.40, author: "Jason Kander", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780358658962.jpg" )
Book.create(title: "Greenlights", price: 6.67, author: "Matthew McConaughey", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780593139134.jpg" )

Book.create(title: "James Patterson", price: 4.32, author: "James Patterson", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780316397537.jpg" )
Book.create(title: "I'd Like To Play Alone, Please", price: 8.09, author: "Tom Segura", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9781538704639.jpg" )
Book.create(title: "The 1619 Project", price: 8.56, author: "Nikole Hannah-Jones", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9780593230572.jpg" )
Book.create(title: "Scars And Stripes", price: 4.73, author: "Tim Kennedy", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9781982190910.jpg" )
Book.create(title: "Untamed", price: 9.45, author: "Glennon Doyle", genre: "Hardcover Noniction", image: "https://storage.googleapis.com/du-prd/books/images/9781984801258.jpg" )

# Hardcover Noniction
BestSeller.create(book_id: 16, list: "Hadcover Nonfiction")
BestSeller.create(book_id: 17, list: "Hadcover Nonfiction")
BestSeller.create(book_id: 18, list: "Hadcover Nonfiction")
BestSeller.create(book_id: 19, list: "Hadcover Nonfiction")
BestSeller.create(book_id: 20, list: "Hadcover Nonfiction")

BestSeller.create(book_id: 21, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 22, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 23, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 24, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 25, list: "Hardcover Nonfiction")

BestSeller.create(book_id: 26, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 27, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 28, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 29, list: "Hardcover Nonfiction")
BestSeller.create(book_id: 30, list: "Hardcover Nonfiction")

# Young Adult 
Book.create(title: "One Of Us Is Lying", price: 7.49, author: "Karen M. McManus", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9781524714680.jpg" )
Book.create(title: "Blade Breaker", price: 10.86, author: "Victoria Aveyard", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9780062872661.jpg" )
Book.create(title: "Family of Liars", price: 5.29, author: "E. Lockhart", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9780593485859.jpg" )
Book.create(title: "Loveless", price: 5.03, author: "Alice Oseman", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9781338840292.jpg" )
Book.create(title: "I Kissed Shara Wheeler", price: 7.07, author: "Casey McQuiston", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9781250244451.jpg" )

Book.create(title: "The Hawthorne Legacy", price: 6.63, author: "Jennifer Lynn Barnes", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9780759557635.jpg" )
Book.create(title: "You've Reached Sam", price: 4.97, author: "Dustin Thao", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9781250762030.jpg" )
Book.create(title: "Stamped", price: 5.98, author: "Jason Reynolds", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9780316453691.jpg" )
Book.create(title: "Iron Window", price: 11.73, author: "Xiran Jay Zhao", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9780735269934.jpg" )
Book.create(title: "Gallant", price: 9.12, author: "V.E. Schwab", genre: "Young Adult", image: "https://storage.googleapis.com/du-prd/books/images/9780062835772.jpg" )

# Young Adult
BestSeller.create(book_id: 31, list: "Young Adult")
BestSeller.create(book_id: 32, list: "Young Adult")
BestSeller.create(book_id: 33, list: "Young Adult")
BestSeller.create(book_id: 34, list: "Young Adult")
BestSeller.create(book_id: 35, list: "Young Adult")

BestSeller.create(book_id: 36, list: "Young Adult")
BestSeller.create(book_id: 37, list: "Young Adult")
BestSeller.create(book_id: 38, list: "Young Adult")
BestSeller.create(book_id: 39, list: "Young Adult")
BestSeller.create(book_id: 40, list: "Young Adult")

puts "Done seeding!"
