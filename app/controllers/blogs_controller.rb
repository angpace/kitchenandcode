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

    private

    def blog_params
        params.permit(:title, :author, :preview, :paragraph_one, :paragraph_two, 
        :paragraph_three, :date, :feature, :image_one, :category, :likes)
    end


end
