class AddCostValueToDesks < ActiveRecord::Migration[6.1]
  def change
    add_column :desks, :cost, :integer
    add_column :desks, :value, :integer
  end
end
