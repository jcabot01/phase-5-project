class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :balance, :class_period, :work_habit_score, :goal, :username, :teacher_id, :avatar_url

has_one :job
end
