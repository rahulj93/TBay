class Api::ProductsController < ApplicationController 
	def create 
		@product = Product.new(product_params)
		if @product.save
			render 'api/products/show'
		else
			render json: @product.errors.full_messages, status: 422
		end 
	end 

  def show
    @product = Product.find(params[:id])
  end

	private 

	def product_params
		params.require(:product).permit(:description, :price, :seller_id, :customer_id)
	end 

end 
