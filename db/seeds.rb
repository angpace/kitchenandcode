# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "...Seeding"

user = User.find_by(email: "angpace13@gmail.com")
blog = Blog.find_by(title: "Is Pangram?")

comment_test = Comment.create(user_id: user.id, blog_id: blog.id, content: "Comments coming soon!" )

puts "Done seeding!"