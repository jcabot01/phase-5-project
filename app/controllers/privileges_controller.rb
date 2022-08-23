class PrivilegesController < ApplicationController
  #POST
  # '/privileges
  def create 
    privileges = Privilege.create!(privilege_params)
    render json: privileges, status: :accepted
  end

  private

  def privilege_params
    params.permit(:event, :amount, :value, :student_id)
  end


end
