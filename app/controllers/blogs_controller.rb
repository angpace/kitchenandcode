class BlogsController < ApplicationController
    
    def index
        blog = Blog.order('created_at DESC')
        render json: blog
    end

    def show 
        blog = Blog.find(params[:id])
        render json: blog
    end

    def specific 
        blogs = Blog.where(category: params[:category])
        render json: blogs
    end

    def create
        blog = Blog.create!(blog_params)
        users = User.all
        # users.new_blog(blog)
        render json: blog
    end

    def update
        blog = Blog.find(params[:id])
        if blog.update(blog_params)
      render json: { success: true, message: 'Likes updated successfully' }
    else
      render json: { success: false, message: blog.errors.full_messages }, status: :unprocessable_entity
    end
    end

    def destroy
        blog = Blog.find(params[:id])
        blog.destroy
        head :no_content
    end

    private

    def blog_params
        params.permit(:title, :user_id, :preview, :paragraph_one, :paragraph_two, 
        :paragraph_three, :date, :feature, :image_one, :category, :likes, :keywords, :featured)
    end


end
