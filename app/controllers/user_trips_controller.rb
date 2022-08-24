class UserTripsController < ApplicationController
  def index
    render json: UserTrip.all
  end

  def create
    user_trip = UserTrip.create!(user_trip_params)
    render json: user_trip, status: :created
  end

  private

  def user_trip_params
    params.permit(:user_id, :trip_id)
  end
end
