class StudentsController < ApplicationController
  #GET
  # '/students'
  def index
    students = Student.all 
    render json: students, status: :ok, include: ['student_jobs', 'student_jobs.job', 'student_desks', 'student_desks.desk', 'privileges'] 
  end

  #GET
  # '/students/:id'
  def show  
    student = Student.find(params[:id])
    render json: student, status: :ok
  end

  #POST
  # '/students
  def create 
    student = Student.create!(student_params)
    render json: student, status: :accepted
  end

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
    params.permit(:first_name, :last_name, :balance, :work_habit_score, :avatar_url, :goal, :class_period, :teacher_id, :username) # :admin
  end
end
