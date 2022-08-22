class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :date, :single_price, :double_price, :hotel, :hotel_desc, :image, :packages, :domestic
end
