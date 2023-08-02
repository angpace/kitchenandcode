class AddServingsAndTimeToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :time, :string
    add_column :recipes, :servings, :integer
  end
end
