class Student < ApplicationRecord
  has_many :student_desks
  has_many :desks, through: :student_desks

  has_many :student_jobs
  has_many :jobs, through: :student_jobs
end
