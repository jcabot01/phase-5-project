class User < ApplicationRecord
  # has_secure_password
  
  # has_many :students, class_name: "User", foreign_key: "teacher_id"
  # has_many :students, class_name: "User", foreign_key: "student_id"


  # belongs_to :teacher, class_name: "User"
  # # has_one :student
  # # has_one :teacher

  # # move over from student model;
  # # has_many :student_desks
  # # has_many :desks, through: :student_desks
  
  # # has_many :student_jobs
  # # has_many :jobs, through: :student_jobs
  
  # # has_many :privileges
  
end