class AddKeyToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :blog_id, :integer
  end
end
