class JobsController < ApplicationController
  #GET
  # '/jobs'
  def index
    jobs = Job.all 
    render json: jobs, status: :ok, include: ['students'] 
  end
  
end
