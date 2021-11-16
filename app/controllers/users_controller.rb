class UsersController < ApplicationController

    def show
        if current_user
            render json: current_user, status: :ok
        
        else
            render json: { error: "You are not logged in" }, status: :unauthorized
        end
    end
   

    end