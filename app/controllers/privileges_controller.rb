class PrivilegesController < ApplicationController
  #GET
  # '/privileges'
  def index
    privileges = Privilege.all 
    render json: privileges, status: :ok, #include: ['privileges'] 
  end

  #GET
  # '/privileges/:id'
  def show  
    privilege = find_privilege
    render json: privilege, status: :ok
  end

  #POST
  # '/privileges
  def create 
    privileges = Privilege.create!(privilege_params)
    render json: privileges, status: :accepted
  end

  #PATCH
  # '/privileges/:id'
  def update
    privilege = find_privilege
    privilege.update!(privilege_params)
    render json: privilege, status: :accepted
  end

  #DELETE
  # '/privileges/:id'
  def destroy
    privilege = find_privilege
    privilege.destroy
    head :no_content
  end

  private

  def find_privilege
    Privilege.find(params[:id])
  end

  def privilege_params
    params.permit(:event, :amount, :value, :student_id) # :admin
  end
end
