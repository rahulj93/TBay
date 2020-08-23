json.set! product.id do 
  json.extract! product, :title, :description, :price, :seller_id, :customer_id
end 