class StudentDesk < ApplicationRecord
  belongs_to :student
  belongs_to :desk
end
