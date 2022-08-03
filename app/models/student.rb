class Student < ApplicationRecord #switch out with this... Student < User
  has_secure_password
  # has_one :user

  has_many :student_desks
  has_many :desks, through: :student_desks
  
  has_many :student_jobs
  has_many :jobs, through: :student_jobs
  
  has_many :privileges
  
  belongs_to :teacher

end
