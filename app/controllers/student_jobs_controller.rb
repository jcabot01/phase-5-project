class StudentJobsController < ApplicationController
    #GET
  # '/student_jobs'
  def index
    student_jobs = StudentJob.all 
    render json: student_jobs, status: :ok#, include: ['privileges'] 
  end

  # #GET
  # # '/student_jobs/:id'
  def show  
    student_job = find_student_job
    render json: student_job, status: :ok
  end

  #  #POST
  # # '/student_jobs
  def create 
    student_job = StudentJob.create!(student_job_params)
    render json: student_job, status: :accepted
  end

  #  #PATCH
  # # '/student_jobs/:id'
  def update
    student_job = find_student_job
    student_job.update!(student_job_params)
    render json: student_job, status: :accepted
  end

  private

  def find_student_job
    StudentJob.find(params[:id])
  end

  def student_job_params
    params.permit(:student_id, :job_id)
  end
end
