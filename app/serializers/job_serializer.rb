class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary

  has_many :students
end
