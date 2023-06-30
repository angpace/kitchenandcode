class AddFeaturedToBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :featured, :boolean
  end
end
