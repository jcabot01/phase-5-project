class TeachersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create_teacher]
  wrap_parameters format: [] #added this so we can map over teachers to select the correct one on student Signup
  
    #Authentication//////////////////////////////////////////////////////////////////////////
 #POST  2 actions: 1)signup to db & 2)set session hash to user_id      session[:teacher_id]
  #create   /signup
  def create_teacher
    teacher = Teacher.create!(teacher_params)
    if teacher.valid?
      session[:teacher_id] = teacher.id
      render json: teacher, status: :created
    else
      render json: { errors: teacher.errors.full_messages }, status: :unprocessable_entity
    end  
  end
  
  #GET  find user whose id == session[:teacher_id].  That user is logged in on every page refresh thanks to useEffect in App.js
  #show   /me    
  def show
    teacher = Teacher.find_by(id: session[:teacher_id])  #find user whose id == session hash
    if teacher 
      render json: teacher, status: :ok
    else 
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  
  #GET
  # '/teachers'
  def index
    teachers = Teacher.all 
    render json: teachers, status: :ok
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
    params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :admin)
  end

  
end
