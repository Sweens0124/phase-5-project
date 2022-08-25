class User < ApplicationRecord
  has_secure_password
  has_one_attached :image

  validates :username, presence: true, uniqueness: true

  validates :password, presence: true, on: :update, if: :should_validate_password?

  validates :email, presence: true, uniqueness: true

  has_many :user_trips
  has_many :trips, through: :user_trips

      private

    def should_validate_password?
        password.present?
    end
end
