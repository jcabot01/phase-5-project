class JobsController < ApplicationController
  #GET
  # '/jobs'
  def index
    jobs = Job.all 
    render json: jobs, status: :ok, include: ['students'] 
  end

  #GET
  # '/jobs/:id'
  def show  
    job = Job.find(params[:id])
    render json: job, status: :ok
  end

  #POST
  # '/jobs
  def create 
    job = Job.create!(job_params)
    render json: job, status: :accepted
  end

  #PATCH
  # '/jobs/:id'
  def update
    job = find_job
    job.update!(job_params)
    render json: job, status: :accepted
  end

  #DELETE
  # '/jobs/:id'
  def destroy
    job = find_job
    job.destroy
    head :no_content
  end

  private

  def find_job
    job.find(params[:id])
  end

  def job_params
    params.permit(:salary, :title, :student_id) # :admin
  end
end
