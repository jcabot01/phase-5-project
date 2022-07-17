class CreateDesks < ActiveRecord::Migration[6.1]
  def change
    create_table :desks do |t|
      t.integer :desk_number
      t.boolean :renting
      t.boolean :owned
      t.boolean :rental

      t.timestamps
    end
  end
end
