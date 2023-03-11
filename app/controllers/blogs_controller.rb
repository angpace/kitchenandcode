class BlogsController < ApplicationController
    
    def index
        render json: Blog.all
    end

    def show 
        blog = Blog.find(params[:id])
        render json: blog
    end

    def create
        blog = Blog.create!(blog_params)
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
        params.permit(:title, :author, :preview, :paragraph_one, :paragraph_two, 
        :paragraph_three, :date, :feature, :image_one, :category, :likes)
    end


end
