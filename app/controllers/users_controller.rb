class UsersController < ApplicationController
  # skip_before_action :authorize, only: [:create]
  # wrap_parameters format: []

  # #POST  2 actions: 1)signup to db & 2)set session hash to user_id      session[:user_id]
  # #create   /signup
  # def create
  #   user = User.create!(user_params)
  #   if user.valid?
  #     session[:user_id] = user.id
  #     render json: user, status: :created
  #   else
  #     render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  #   end  
  # end

  # #GET  find user whose id == session[:user_id].  That user is logged in on every page refresh thanks to useEffect in App.js
  # #show   /me    
  # def show
  #   user = User.find_by(id: session[:user_id])  #find user whose id == session hash
  #   if user 
  #     render json: user, status: :ok
  #   else 
  #     render json: { error: "Not authorized" }, status: :unauthorized
  #   end
  # end

  # private

  # def user_params
  #   params.permit(:username, :password, :password_confirmation)   #add password here for a POST to db
  # end

end