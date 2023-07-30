class CommentsController < ApplicationController

 def show 
    comments = Comment.all 
    render json: comments
 end 

 def create 
   comment = Comment.create!(comment_params)
      if comment 
      render json: comment
   else
      render json: { error: "In order to comment you have to be subscribed and logged in." }, status: :unauthorized
      end

 end 

 def destroy
   comment = Comment.find(params[:id])
   comment.destroy
   head :no_content
end

 private
  
 def comment_params
   params.permit(:user_id, :blog_id, :content)
 end 

 
end
