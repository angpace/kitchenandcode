class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :preview, :paragraph_one, :paragraph_two, :paragraph_three, :date, :feature, :image_one
end
