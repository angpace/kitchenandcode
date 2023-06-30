class AddKeywordsToBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :keywords, :string
  end
end
