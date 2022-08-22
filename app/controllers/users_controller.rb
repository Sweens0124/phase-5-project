class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def create
    user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end

end
