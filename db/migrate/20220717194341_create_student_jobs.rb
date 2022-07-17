class CreateStudentJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :student_jobs do |t|
      t.integer :job_id
      t.integer :student_id

      t.timestamps
    end
  end
end
