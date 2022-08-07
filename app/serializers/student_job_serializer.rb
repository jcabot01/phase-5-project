class StudentJobSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :student_id

  belongs_to :job
end
