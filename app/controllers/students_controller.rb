class StudentsController < ApplicationController
  skip_before_action :authorize, only: [:create, :update]
  wrap_parameters format: []

  #Authentication//////////////////////////////////////////////////////////////////////////
 #POST  2 actions: 1)signup to db & 2)set session hash to user_id      session[:student_id]
  #create   /signup
  def create
    student = Student.create!(student_params)
    if student.valid?
      session[:user_id] = student.id
      render json: student, status: :created
    else
      render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
    end  
  end

  #GET  find user whose id == session[:user_id].  That user is logged in on every page refresh thanks to useEffect in App.js
  #show   /me    
  def show
    student = Student.find_by(id: session[:student_id])  #find user whose id == session hash
    if student 
      render json: student, status: :ok
    else 
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end


#Normal CRUD stuff ///////////////////////////////////////////////////////////////////////
  #GET
  # '/students'
  def index
    students = Student.all 
    render json: students, status: :ok, include: ['student_jobs', 'student_jobs.job', 'student_desks', 'student_desks.desk', 'privileges'] 
  end

  # #GET
  # # '/students/:id'
  # def show  
  #   student = Student.find(params[:id])
  #   render json: student, status: :ok
  # end

  # #POST
  # # '/students
  # def create 
  #   student = Student.create!(student_params)
  #   render json: student, status: :accepted
  # end

  #PATCH
  # '/students/:id'
  def update
    student = find_student
    student.update!(student_params)
    render json: student, status: :accepted
  end

  #DELETE
  # '/students/:id'
  def destroy
    student = find_student
    student.destroy
    head :no_content
  end

  private

  def find_student
    Student.find(params[:id])
  end

  def student_params
    params.permit(:first_name, :last_name, :balance, :work_habit_score, :avatar_url, :goal, :class_period, :admin, :teacher_id, :username, :jobs, :password, :password_confirmation)
  end
end
