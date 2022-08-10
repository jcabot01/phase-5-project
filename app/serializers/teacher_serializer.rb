class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :admin, :students

  has_many :students
end