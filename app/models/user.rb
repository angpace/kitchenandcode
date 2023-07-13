class User < ApplicationRecord
    has_secure_password

    has_many :blogs, dependent: :destroy
    has_many :comments

    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    # validates :password, length: { minimum: 6 }

    require 'sendgrid-ruby'
        include SendGrid

    def welcome
        
        from = Email.new(email: 'welcome.kitchenandcode@gmail.com')
        to = Email.new(email: "#{self.email}")
        subject = 'Welcome!'
        content = Content.new(type: 'text/plain', value: "Hi there #{self.name},

I wanted to personally welcome you to Kitchen and Code. The journey from Pastry Chef to Software Engineer has been a challenging, exciting and fufilling one and I'm looking forward to sharing that journey with you! As a subscriber, you'll be the first to know about new posts.

Thanks for joining me,  
Angela Pace
Software Engineer | Kitchenandcode.com
        ")
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers

    end

    def new_sub(subscriber)
        
        from = Email.new(email: 'welcome.kitchenandcode@gmail.com')
        to = Email.new(email: "#{self.email}")
        subject = 'Welcome a new subscriber!'
        content = Content.new(type: 'text/plain', value: "Hi #{self.name},

We have a new subscriber! Welcome #{subscriber.name}.
        ")
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers

    end

    # def new_blog (blog)
        
    #     from = Email.new(email: 'welcome.kitchenandcode@gmail.com')
    #     to = Email.new(email: users.map(&:email))
    #     subject = "#{blog.title} is up!"
    #     content = Content.new(type: 'text/plain', value: "Hi, there #{self.name}!  
    #     A new blog, #{blog.title}, is up. Check it out!

    #     Best, 
    #     Angela Pace
    #     Content Creater | Kitchenandcode.com
    #     ")
    #     mail = Mail.new(from, subject, to, content)
        
    #     sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
    #     response = sg.client.mail._('send').post(request_body: mail.to_json)
    #     puts response.status_code
    #     puts response.body
    #     puts response.headers

    # end



end
