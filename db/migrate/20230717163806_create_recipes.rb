class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :ingredients, array: true, default: []
      t.text :method, array: true, default: []

      t.timestamps
    end
  end
end
