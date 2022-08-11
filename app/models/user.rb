class User < ApplicationRecord
  has_many :trips
  has_many :users, through: :trips

  has_secure_password
end
