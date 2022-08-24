class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    render json: User.all
  end

  def show
    user = User.find(session[:user_id])
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end

end
