# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "...Seeding"

User.destroy_all
Blog.destroy_all

angela = User.create(name: "angela", email: "angpace13@gmail.com", password: "kitchcode", image: "https://www.gannett-cdn.com/presto/2020/03/17/USAT/c0eff9ec-e0e4-42db-b308-f748933229ee-XXX_ThinkstockPhotos-200460053-001.jpg?crop=1170%2C658%2Cx292%2Cy120&width=1200")

test = Blog.create(title: "This is a test", author: "Angela Pace", preview: "fihwfoweoiu kjsdf oisdfgis hsf ousgu sugso.", paragraph_one: "fshf hdog sidos
sdgjjkjl ig ous ufu ufs pf9090f  ilkjf.", feature: "https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1659544996.jpg",
 paragraph_two: "thats not all I am a monkey who lives on the moon. I am writing to you with a phine.", date: "Sept. 11, 1996")

puts "Done seeding!"