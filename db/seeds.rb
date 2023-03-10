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

angela = User.create(name: "Angela Pace", email: "angpace13@gmail.com", password: "kitchcode", image: "https://www.gannett-cdn.com/presto/2020/03/17/USAT/c0eff9ec-e0e4-42db-b308-f748933229ee-XXX_ThinkstockPhotos-200460053-001.jpg?crop=1170%2C658%2Cx292%2Cy120&width=1200")

test = Blog.create(title: "Welcome!", author: "Angela Pace", preview: "I'm excited to share my insights with you and hope to inspire you to try something new, be it a new recipe or a new npm package.", paragraph_one: " 
Welcome to my blog where I blend my passion for technology and cooking! As someone who loves to experiment in the kitchen and explore the latest advancements in technology, I created this space to share my insights, tips, and experiences with you. 
Whether you're a tech enthusiast, a food lover, or both, this blog has something for everyone. From recipes and cooking techniques to the latest AI and React plugins, 
 I aim to deliver content that's informative, insipring, and fun.", 
 feature: "https://agfundernews.com/wp-content/uploads/2019/04/iStock-939213984-768x499.jpg",
 paragraph_two: "If you already took a look around, you'll see that K&C is also my portfolio. I intend to continue updating this site by adding more features and functionality and Im excited
 to hear what you guys think! At the moment I'm adding the ability for readers (like you!) to add comments to blog posts so we can interact easily! Until that feature is in place, 
 please feel free to reach out via any social platform that is linked in the About Me page. 
 ", image_one: "https://grist.org/wp-content/uploads/2013/06/apple-food-technology-hp.jpg", 
paragraph_three: "So, grab a cup of coffee or tea, sit back, and join me on this journey of culinary and technological exploration.",
 date: "March 2nd, 2023", category: "Tech")

 blog2 = Blog.create(title: "Is Pangram?", author: "Angela Pace", preview: "Interviews are naturally the next step when applying for a jobs, right? ",
 paragraph_one: "I was sending job applications like it was my job. Erasing the last two digits and updating them everyday on my whiteboard. 104, 113, 122.  
 But then something unthinkable happened- an INTERVIEW. I got so wrapped up in the applying process that I overlooked 
 the next step which left me feeling unprepared and anxious. Taking a deep breath, I logged onto HackerRank and started up my very dusty journey on my one month preparation kit. ", 
 paragraph_two: "The problem I focused on was Pangrams. A pangram is a string that contains all of the letters of the alphabet, at least once. The goal is to build a function that would accept a string as a parameter and return either, “pangram” or “not pangram,” depending on the string. My initial thoughts on how to solve this were, 1. We need to tell Javascript what the alphabet is, 2. We can probably use the alphabets length in some way and 3. 
 We’ll need to access the characters in the string. ", paragraph_three: "Ultimately this solution passed on both HackerRank and Leetcode. Since those sites tend to use different test cases, I find it more helpful testing my solutions on both, just in case I overlooked an edge case. For example, my solution got snagged on a string that had the same length as my split alphabet so it returned undefined opposed to true. In order to fix that, I added + 1 to the splitStrings length in my for loop. Upon submitting, 
 this solution beat 81% of solution runtimes and 51% of solution memory.", date: "March 9th, 2023", image_one: "https://media.discordapp.net/attachments/1055910530528850011/1083539975112499320/Screen_Shot_2023-03-09_at_11.31.53_AM.png?width=1680&height=916",
 feature: "https://images.squarespace-cdn.com/content/v1/57a9d8dcd482e9bbf179f445/1495010574822-KBM2BFDM9SM7E7C5DQHH/The+quick+brown+fox+jumps+over+the+lazy+dog.png?format=750w", category: "Tech", likes: 1
 )



puts "Done seeding!"