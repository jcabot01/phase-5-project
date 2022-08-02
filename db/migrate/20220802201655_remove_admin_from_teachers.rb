class RemoveAdminFromTeachers < ActiveRecord::Migration[6.1]
  def change
    remove_column :teachers, :admin, :boolean
  end
end
