class TripSerializer < ActiveModel::Serializer
  attributes :id, :"location,", :"date,", :price
end
