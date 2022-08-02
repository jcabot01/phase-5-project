class RemoveAdminFromStudents < ActiveRecord::Migration[6.1]
  def change
    remove_column :students, :admin, :boolean
  end
end
