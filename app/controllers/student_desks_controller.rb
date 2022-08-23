class StudentDesksController < ApplicationController
 
  #  #GET
  # # '/student_desks'
  # def index
  #   student_desks = StudentDesk.all 
  #   render json: student_desks, status: :ok
  # end

  # # #GET
  # # # '/student_desks/:id'
  # def show  
  #   student_desk = find_student_desk
  #   render json: student_desk, status: :ok
  # end

  #  #POST
  # # '/student_desks
  def create 
    student_desk = StudentDesk.create!(student_desk_params)
    render json: student_desk, status: :accepted
  end

  #  #PATCH
  # # '/student_desks/:id'
  def update
    student_desk = find_student_desk
    student_desk.update!(student_desk_params)
    render json: student_desk, status: :accepted
  end

  private

  def find_student_desk
    StudentDesk.find(params[:id])
  end

  def student_desk_params
    params.permit(:student_id, :desk_id, :is_owned_or_rented)
  end

end
