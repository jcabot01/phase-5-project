class Desk < ApplicationRecord
  has_many :student_desks
  has_many :students, through: :student_desks
end
