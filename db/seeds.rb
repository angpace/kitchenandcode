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

test = Blog.create(title: "Welcome!", author: "Angela Pace", preview: "I'm excited to share my insights with you and hope to inspire you to try something new, be it a new recipe or a new npm package.", paragraph_one: " 
Welcome to my blog where I blend my passion for technology and cooking! As someone who loves to experiment in the kitchen and explore the latest advancements in technology, I created this space to share my insights, tips, and experiences with you. 
Whether you're a tech enthusiast, a food lover, or both, this blog has something for everyone. From recipes and cooking techniques to the latest AI and React plugins, 
 I aim to deliver content that's informative, insipring, and fun.", 
 feature: "https://agfundernews.com/wp-content/uploads/2019/04/iStock-939213984-768x499.jpg",
 paragraph_two: "If you already took a look around, you'll see that K&C is also my portfolio. I intend to continue updating this site by adding more features and functionality and Im excited
 to hear what you guys. At the moment I'm adding the ability for readers (like you!) to add comments to blog posts so we can interact easily! Until that feature is in place, 
 please feel free to reach out via any social platform that is linked in the About Me page. 
 ", image_one: "https://grist.org/wp-content/uploads/2013/06/apple-food-technology-hp.jpg", 
paragraph_three: "So, grab a cup of coffee or tea, sit back, and join me on this journey of culinary and technological exploration.",
 date: "March 2nd, 2023", category: "Tech")



puts "Done seeding!"