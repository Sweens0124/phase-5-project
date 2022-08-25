class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :date, :single_price, :double_price, :hotel, :hotel_desc, :image, :packages, :domestic, :user_count

  has_many :users

  def user_count
    object.users.count
  end

end
