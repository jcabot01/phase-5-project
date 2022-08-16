class Student < ApplicationRecord
  has_secure_password

  has_many :student_desks, dependent: :destroy
  has_many :desks, through: :student_desks
  
  has_many :student_jobs, dependent: :destroy
  has_many :jobs, through: :student_jobs
  
  has_many :privileges, dependent: :destroy
  
  belongs_to :teacher

  validates :balance, numericality: {:greater_than => 0}
end
