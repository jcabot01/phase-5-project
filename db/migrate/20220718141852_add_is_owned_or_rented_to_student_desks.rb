class AddIsOwnedOrRentedToStudentDesks < ActiveRecord::Migration[6.1]
  def change
    add_column :student_desks, :is_owned_or_rented, :string
  end
end
