class RemoveOwnedRentingRentalFromDesks < ActiveRecord::Migration[6.1]
  def change
    remove_column :desks, :rental, :boolean
    remove_column :desks, :owned, :boolean
    remove_column :desks, :renting, :boolean
  end
end
