class CommentsController < ApplicationController

 def show 
    comments = Comment.all 
    render json: comments
 end 
 
end
