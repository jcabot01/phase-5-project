class TeachersController < ApplicationController
  #GET
  # '/teachers'
  def index
    teachers = Teacher.all 
    render json: teachers, status: :ok#, include: ['job', 'teacher_desks', 'teacher_desks.desk', 'privileges'] 
  end

  #GET
  # '/teachers/:id'
  def show  
    teacher = Teacher.find(params[:id])
    render json: teacher, status: :ok
  end

  #POST
  # '/teachers
  def create 
    teacher = Teacher.create!(teacher_params)
    render json: teacher, status: :accepted
  end

  #PATCH
  # '/teachers/:id'
  def update
    teacher = find_teacher
    teacher.update!(teacher_params)
    render json: teacher, status: :accepted
  end

  #DELETE
  # '/teachers/:id'
  def destroy
    teacher = find_teacher
    teacher.destroy
    head :no_content
  end

  private

  def find_teacher
    Teacher.find(params[:id])
  end

  def teacher_params
    params.permit(:first_name, :last_name, :username) # :admin
  end

  
end
