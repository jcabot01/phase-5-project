class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.boolean :admin
      t.integer :student_id

      t.timestamps
    end
  end
end
