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

test = Blog.create(title: "This is a test", author: "Angela Pace", preview: "fihwfoweoiu kjsdf oisdfgis hsf ousgu sugso.", paragraph_one: "They decided to find the end of the rainbow. 
While they hoped they would find a pot of gold, neither of them truly believed that the mythical pot would actually be there.
 Nor did they believe they could actually find the end of the rainbow. Still, it seemed like a fun activity for the day, and pictures of them chasing rainbows would look great on their Instagram accounts. 
 They would have never believed they would actually find the end of a rainbow, and when they did, what they actually found there. sdgjjkjl ig ous ufu ufs pf9090f  ilkjf.", 
 feature: "https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1659544996.jpg",
 paragraph_two: "thats not all I am a monkey who lives on the moon. I am writing to you with a phine.
 She put the pen to paper but she couldn't bring herself to actually write anything. 
 She just stared at the blank card and wondered what words she could write that would help in even a small way. 
 She thought of a dozen ways to begin but none seemed to do justice to the situation. 
There were no words that could help and she knew it.", image_one: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", 
paragraph_three: "The opened package of potato chips held the answer to the mystery. 
Both detectives looked at it but failed to realize it was the key to solve the crime. 
They passed by it assuming it was random trash ensuring that the case would never be solved.",
 date: "Feburary 17th", category: "Food")

test2 = Blog.create(title: "This is also test", author: "Angela Pace", preview: "fihwfoweoiu kjsdf oisdfgis hsf ousgu sugso.", paragraph_one: "fshf hdog sidos
sdgjjkjl ig ous ufu ufs pf9090f  ilkjf.", feature: "https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1659544996.jpg",
 paragraph_two: "thats not all I am a monkey who lives on the moon. I am writing to you with a phine.", date: "Feburary 19th", category: "Tech")

puts "Done seeding!"