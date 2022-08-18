class AddImageToTrips < ActiveRecord::Migration[6.1]
  def change
    add_column :trips, :image, :string
  end
end
