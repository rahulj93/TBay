class Api::UsersController < ApplicationController 
	def create 
		@product = Product.new(product_params)
		if @product.save
			render 'api/products/show'
		else
			render json: @product.errors.full_messages, status: 422
		end 
	end 

	private 

	def user_params
		params.require(:product).permit(:description, :price, :seller_id, :customer_id)
	end 

end 
