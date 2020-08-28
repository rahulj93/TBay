class AddPictureUrlToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :picture_url, :string
  end
end
