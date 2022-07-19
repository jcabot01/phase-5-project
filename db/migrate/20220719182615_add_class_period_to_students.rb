class AddClassPeriodToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :class_period, :integer
  end
end
