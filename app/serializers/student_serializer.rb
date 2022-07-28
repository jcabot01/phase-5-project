class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :balance, :class_period, :work_habit_score, :goal, :username, :teacher_id, :avatar_url, :jobs


has_many :jobs
has_many :student_desks
has_many :desks, through: :student_desks
has_many :privileges
end
