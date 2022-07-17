class RemoveStudentIdFromJobs < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :student_id, :integer
  end
end
