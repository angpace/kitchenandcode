class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :method, :blog_id, :photo
end
