class ApplicationController < ActionController::API
  include ActionController::Cookies
  wrap_parameters format: []
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    @current_user = Student.find_by(id: session[:student_id]) || Teacher.find_by(id: session[:teacher_id])
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    return render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end 
end
