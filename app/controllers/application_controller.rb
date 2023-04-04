class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found   
  
  private


  def not_found 
    render json: {errors: "Not Found"}, status: :not_found
  end


end
