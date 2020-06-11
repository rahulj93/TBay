class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.text :description, null:false
      t.decimal :price, precision: 10, scale: 2, null:false
      t.integer :seller_id, null:false 
      t.integer :customer_id 

      t.timestamps
    end
  end
end
