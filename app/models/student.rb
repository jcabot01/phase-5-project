class Student < ApplicationRecord
  has_secure_password

  has_many :student_desks, dependent: :destroy
  has_many :desks, through: :student_desks
  
  has_many :student_jobs, dependent: :destroy
  has_many :jobs, through: :student_jobs
  
  has_many :privileges, dependent: :destroy
  
  belongs_to :teacher

  validates :balance, numericality: {:greater_than => 0}
  validates :work_habit_score, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 4}
  validates :class_period, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 8}
  validates :username, presence: true
end
