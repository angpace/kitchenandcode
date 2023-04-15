class BlogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :preview, :paragraph_one, :paragraph_two, :paragraph_three, :date, :feature, :image_one, :category, :likes, :comments
end
