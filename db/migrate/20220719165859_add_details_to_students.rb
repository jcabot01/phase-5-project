class AddDetailsToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :work_habit_score, :integer
    add_column :students, :avatar_url, :string
    add_column :students, :goal, :string
    add_column :students, :username, :string
    add_column :students, :password_digest, :string
    add_column :students, :admin, :boolean
  end
end
