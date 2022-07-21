class JobController < ApplicationController
  #GET
  # '/job'
  def index
    job = Job.all 
    render json: job, status: :ok, include: ['job'] 
  end

  #GET
  # '/job/:id'
  def show  
    job = Job.find(params[:id])
    render json: job, status: :ok
  end

  #POST
  # '/job
  def create 
    job = Job.create!(job_params)
    render json: job, status: :accepted
  end

  #PATCH
  # '/job/:id'
  def update
    job = find_job
    job.update!(job_params)
    render json: job, status: :accepted
  end

  #DELETE
  # '/job/:id'
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
