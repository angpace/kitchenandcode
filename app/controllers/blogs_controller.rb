class BlogsController < ApplicationController
    
    def index
        render json: Blog.all
    end

    def show 
        blog = Blog.find(params[:id])
        render json: blog
    end

end
