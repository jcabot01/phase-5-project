class CreatePrivileges < ActiveRecord::Migration[6.1]
  def change
    create_table :privileges do |t|
      t.string :event
      t.integer :amount
      t.integer :value
      t.integer :student_id

      t.timestamps
    end
  end
end
