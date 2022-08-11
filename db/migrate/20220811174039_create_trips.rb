class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :location
      t.string :date
      t.float :price

      t.timestamps
    end
  end
end
