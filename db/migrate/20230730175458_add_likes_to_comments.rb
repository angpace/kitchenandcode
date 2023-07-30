class AddLikesToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :likes, :integer
  end
end
