class StudentDesk < ApplicationRecord
  belongs_to :student
  belongs_to :desk

  # class method for filter and map to return desk ids,  take in "string" and student_id
end
