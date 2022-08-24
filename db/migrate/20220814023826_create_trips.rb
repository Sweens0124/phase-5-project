class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :location
      t.string :date
      t.float :single_price
      t.float :double_price
      t.string :hotel
      t.string :hotel_desc

      t.timestamps
    end
  end
end
