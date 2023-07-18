# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
puts "...Seeding"
# Blog.destroy_all

    
# # Blog.destroy_all
# User.destroy_all

# angela = User.create!(name: "Angela Pace", email: "angpace13@gmail.com", password_digest: "kitchcode")

# first = Blog.create!(title: "Welcome Back!", user_id: angela.id, preview: "I'm excited to share Kitchen and Code v2.0! I put a lot of work into the rebranding of the site and I cant wait for you to see it.", paragraph_one: " 
# Welcome to my blog where I blend my passion for technology and cooking! As someone who loves to experiment in the kitchen and explore the latest advancements in technology, I created this space to share my insights, tips, and experiences with you. 
# Whether you're a tech enthusiast, a food lover, or both, this blog has something for everyone. From recipes and cooking techniques to the latest AI and React plugins, 
#  I aim to deliver content that's informative, insipring, and fun.", 
#  feature: "https://images.pexels.com/photos/8473852/pexels-photo-8473852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
#  paragraph_two: "Being a former pastry chef, kitchen and code is a bit of a passion project for me. I've learnt a lot building it and I'm excited to continue to learn as I add new features.", image_one: "https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
# paragraph_three: "Thanks for joining me on this journey. I hope it brings you at least half of the joy it brings me!",
#  date: "June 30th, 2023", category: "tech", likes: 0, keywords: "coding kitchen about", featured: true)

# test = Recipe.create!(title: "Peanut Butter and Jelly", ingredients: ["peanut butter", "jelly", "bread"], method: ["1. Toast two slices of bread", "2. Take knife and spread peanut butter on one slice.", 
# "3. Do the same with the jelly on the other piece.", "4. Put bread together and enjoy!"], blog_id: first.id)




# # comment_test = Comment.create(user_id: user.id, blog_id: blog.id, content: "Comments coming soon!" )

puts "Done seeding!"