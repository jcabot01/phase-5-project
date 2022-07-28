class StudentJob < ApplicationRecord
  belongs_to :job
  belongs_to :student
end
