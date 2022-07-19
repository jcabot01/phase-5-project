class Job < ApplicationRecord
  belongs_to :student
  # has_many :student_jobs
  # has_many :students, through: :student_jobs
end
