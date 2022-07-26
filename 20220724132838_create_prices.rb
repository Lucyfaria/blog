class CreatePrices < ActiveRecord::Migration[7.0]
  def change
    create_table :prices do |t|
      t.string :name
      t.integer :normal
      t.integer :import
      t.integer :motorrad
      t.integer :heli

      t.timestamps
    end
  end
end
