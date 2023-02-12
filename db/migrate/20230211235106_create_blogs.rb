class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :author
      t.string :preview
      t.string :paragraph_one
      t.string :paragraph_two
      t.string :paragraph_three
      t.string :date

      t.timestamps
    end
  end
end
