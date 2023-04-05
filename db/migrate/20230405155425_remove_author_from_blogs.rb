class RemoveAuthorFromBlogs < ActiveRecord::Migration[6.1]
  def change
    remove_column :blogs, :author, :string
  end
end
