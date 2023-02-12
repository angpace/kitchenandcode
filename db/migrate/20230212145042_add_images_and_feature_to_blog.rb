class AddImagesAndFeatureToBlog < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :image_one, :string
    add_column :blogs, :feature, :string
  end
end
