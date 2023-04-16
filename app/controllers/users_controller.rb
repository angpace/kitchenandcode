class UsersController < ApplicationController

    def show 
        user = User.find_by(id: session[:user_id])
        if user
        render json: user
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def user_name 
        user = User.find_by(id: params[:id])
        render json: user
    end 

    def create
        user = User.create!(user_params)
        user.welcome
        render json: user
        rescue ActiveRecord::RecordInvalid => e
            render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end



    private

    def user_params
        params.permit(:name, :email, :password)
    end

end
