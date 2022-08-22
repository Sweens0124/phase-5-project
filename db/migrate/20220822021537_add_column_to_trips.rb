class AddColumnToTrips < ActiveRecord::Migration[6.1]
  def change
    add_column :trips, :domestic, :string
  end
end
