class ChangeColumnInTrips < ActiveRecord::Migration[6.1]
  def change
    change_column :trips, :hotel_desc, :text
  end
end
