class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def show
        @users = User.all
    end
    # Set the user record before each action
    # before_action :set_user, only: [:show, :edit, :update, :destroy]
  
    # # User must authenticate to use all actions in the users controller  
    # #before_filter :authenticate_user!
  
    # def create
    #   if current_user.role = "superadmin" then
    #     @user = User.new(user_params)
    #     @user.password = Devise.friendly_token[0,20]
  
    #     respond_to do |format|
    #       if @user.save
    #         format.html { redirect_to @user, notice: 'User was successfully created.' }
    #         format.json { render action: 'show', status: :created, location: @user }
    #       else
    #         format.html { render action: 'new' }
    #         format.json { render json: @user.errors, status: :unprocessable_entity }
    #       end
    #     end
    #   else
    #     format.html { redirect_to @user, notice: 'You do not have sufficient rights to set up a new user.' }
    #   end
    # end
  
    # private
  
    # # Use callbacks to share common setup or constraints between actions.
    # # def set_user
    # #   @user = User.find(params[:username])
  
    # #   rescue ActiveRecord::RecordNotFound  
    # #   flash[:notice] = "User record does not exist"
    # #   redirect_to users_url
    # # end
  end