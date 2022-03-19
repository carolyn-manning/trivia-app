class UsersController < ApplicationController
    def create
        user = User.new(user_params)
        if user.save 
            render json: user
        end
    end 

    def index
        render json: User.all
    end

    private 
    def user_params
        params.require(:user).permit(:name) 
    end 
end
