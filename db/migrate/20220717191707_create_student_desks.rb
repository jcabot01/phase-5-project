class CreateStudentDesks < ActiveRecord::Migration[6.1]
  def change
    create_table :student_desks do |t|
      t.integer :desk_id
      t.integer :student_id

      t.timestamps
    end
  end
end
