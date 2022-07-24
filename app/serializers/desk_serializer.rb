class DeskSerializer < ActiveModel::Serializer
  attributes :id, :desk_number, :cost, :value

  has_many :students
end
