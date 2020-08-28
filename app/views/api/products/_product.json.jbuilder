json.set! product.id do 
  json.extract! product, :title, :description, :price, :seller_id, :customer_id 
  # json.picture_url product.picture_url || url_for(product.photo)

end 

if product.photo.attached? 
  json.picture_url url_for(product.photo)
end 
  # json.extract! product, :title, :description, :price, :seller_id, :customer_id, :photo
