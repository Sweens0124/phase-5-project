class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :email, :image
  has_many :user_trips

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
