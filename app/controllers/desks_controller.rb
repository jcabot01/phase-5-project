class DesksController < ApplicationController

  def index 
    desks = Desk.all
    render json: desks, status: :ok
  end

  def show
    desk = Desk.find(params[:id])
    render json: desk, status: :ok
  end
end
