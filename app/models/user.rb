class User < ApplicationRecord
    has_secure_password
    # validates :email, presence: true, uniqueness: true
    # validates :name, presence: true
    # validates :password, length: { minimum: 6 }

    require 'sendgrid-ruby'
        include SendGrid

    def welcome
        
        from = Email.new(email: 'welcome.kitchenandcode@gmail.com')
        to = Email.new(email: "#{self.email}")
        subject = 'Welcome!'
        content = Content.new(type: 'text/plain', value: "Hi, there #{self.name}! 

    I wanted to personally welcome you and express my gratitude for joining me. The journey from Pastry Chef to Software Engineer has been challenging, exciting and fufilling. I'm looking forward to sharing that journey with you! As a subscriber, you'll be the first to know about new blog posts, special offers, and exclusive content.    
    Thank you once again, I look forward to getting to know you better!

    Best, 
    Angela Pace
    Content Creater | Kitchenandcode.com
        ")
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers

    end



end
