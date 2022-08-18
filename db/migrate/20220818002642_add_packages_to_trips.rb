class AddPackagesToTrips < ActiveRecord::Migration[6.1]
  def change
    add_column :trips, :packages, :string, array: true, default: []
  end
end
