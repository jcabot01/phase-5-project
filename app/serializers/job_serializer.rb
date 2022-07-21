class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :student_id

belongs_to :student
end
