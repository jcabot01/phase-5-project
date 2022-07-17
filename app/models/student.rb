class Student < ApplicationRecord
  has_many :student_desks
  has_many :desks, through: :student_desks

  has_one :job
end
