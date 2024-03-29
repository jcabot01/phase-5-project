Rails.application.routes.draw do
  resources :students   #full CRUD
  resources :jobs, only: [:index]
  resources :privileges, only: [:create]
  resources :student_desks, only: [:create, :update]
  resources :teachers, only: [:index]
  resources :student_jobs, only: [:create, :update]
  resources :desks, only: [:index, :show]
  
  #Authentication/Authorization
  post '/login/student', to: 'sessions#create_student'  #login existing student params[username and password], set session hash
  post '/login/teacher', to: 'sessions#create_teacher'  #login existing student params[username and password], set session hash
  delete '/logout/student', to: 'sessions#destroy_student'
  delete '/logout/teacher', to: 'sessions#destroy_teacher'
  post '/signup/student', to: 'students#create'  #create new student params[username, pw, pw-confirm] & set session hash
  post '/signup/teacher', to: 'teachers#create_teacher'  #create new teacher params[username, pw, pw-confirm] & set session hash
  get '/me/student', to: 'students#show' #check if session hash and student.id match, useEffect on every page load
  get '/me/teacher', to: 'teachers#show' #check if session hash and student.id match, useEffect on every page load

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
