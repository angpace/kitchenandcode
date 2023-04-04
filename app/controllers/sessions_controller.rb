class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: "Something went wrong"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id 
        head :no_content
    end


end
