class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create_student, :create_teacher]

  #POST create session, place cookie in user browser.  Must pass auth: based on username & password .authenticate?
  #create   /login/student
  def create_student 
    student = Student.find_by(username: params[:username])
    if student&.authenticate(params[:password])  
      session[:student_id] = student.id
      render json: student, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end 
  end

  #create   /login/teacher
  def create_teacher
    teacher = Teacher.find_by(username: params[:username])
    if teacher&.authenticate(params[:password]) 
      session[:teacher_id] = teacher.id
      render json: teacher, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end 
  end

  #DELETE destroy session hash to logout out user
  ##destroy   /logout/student
  def destroy_student
    session.delete :student_id
    head :no_content
  end 

   #DELETE destroy session hash to logout out user
  ##destroy   /logout/teacher
  def destroy_teacher
    session.delete :teacher_id
    head :no_content
  end 


end