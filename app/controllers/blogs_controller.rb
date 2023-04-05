class BlogsController < ApplicationController
    
    def index
        blog = Blog.order('created_at DESC')
        render json: blog
    end

    def show 
        blog = Blog.find(params[:id])
        render json: blog
    end

    def create
        blog = Blog.create!(blog_params)
        users = User.all
        # users.new_blog(blog)
        render json: blog
    end

    def update
        blog = Blog.find(params[:id])
        blog.update(blog_params)
        render json: blog
    end

    def destroy
        blog = Blog.find(params[:id])
        blog.destroy
        head :no_content
    end

    private

    def blog_params
        params.permit(:title, :user_id, :preview, :paragraph_one, :paragraph_two, 
        :paragraph_three, :date, :feature, :image_one, :category, :likes)
    end


end
