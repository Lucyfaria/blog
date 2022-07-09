class CreateFractions < ActiveRecord::Migration[7.0]
  def change
    create_table :fractions do |t|
      t.string :name
      t.string :primary
      t.string :secondary
      t.string :pearl
      t.string :smoke
      t.string :lights
      t.date :contract
      t.boolean :plate

      t.timestamps
    end
  end
end
