class Student < ApplicationRecord  #switch out with this... Student < User

  has_many :student_desks
  has_many :desks, through: :student_desks

  has_one :job
  # has_many :student_jobs
  # has_many :jobs, through: :student_jobs
end
