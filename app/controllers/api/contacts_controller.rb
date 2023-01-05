class Api::ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :update, :destroy]
  
  def index
    render json: Contact.all
  end

  def show
    render json: @contact
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @contact.destroy
    render json: { message: 'Contact deleted' }
  end

  private

    def contact_params
      params.require(:contact).permit(:fname, :lname, :phone, :email)
    end

    def set_contact
      @contact = Contact.find(params[:id])
    end
end
