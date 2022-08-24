class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  validates :email, presence: true, uniqueness: true

  has_many :user_trips
  has_many :trips, through: :user_trips
end
