Rails.application.routes.draw do
  resources :students   #full CRUD on students: index, show, create, update, destroy
  resources :jobs
  resources :privileges
  resources :student_desks
  resources :teachers
  resources :student_jobs
  get '/desks', to: 'desks#index' #get all desks data
  get '/desks/:id', to: 'desks#show' #get all desks data




  #Authentication/Authorization
  post '/login', to: 'sessions#create'  #login existing student params[username and password], set session hash
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'students#create'  #create new student params[username, pw, pw-confirm] & set session hash
  get '/me', to: 'students#show' #check if session hash and student.id match, useEffect on every page load

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
