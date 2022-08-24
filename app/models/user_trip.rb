class UserTrip < ApplicationRecord
  belongs_to :user
  belongs_to :trip

  def index
    render json: UserTrip.all
  end

  def create
    
  end
end
