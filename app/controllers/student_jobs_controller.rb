class StudentJobsController < ApplicationController
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
