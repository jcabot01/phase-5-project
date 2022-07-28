class Job < ApplicationRecord
  has_many :student_jobs
  has_many :students, through: :student_jobs
 
end
