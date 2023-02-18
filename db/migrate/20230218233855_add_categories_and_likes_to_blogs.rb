class AddCategoriesAndLikesToBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :category, :string
    add_column :blogs, :likes, :integer
  end
end
