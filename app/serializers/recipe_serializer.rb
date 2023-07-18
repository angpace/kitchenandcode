class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :method
end
