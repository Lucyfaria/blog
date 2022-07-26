class CreatePrices < ActiveRecord::Migration[7.0]
  def change
    create_table :prices do |t|
      t.string :name
      t.decimal :normal
      t.decimal :import
      t.decimal :motorrad
      t.decimal :heli

      t.timestamps
    end
  end
end
