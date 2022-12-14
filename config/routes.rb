Rails.application.routes.draw do  
  resources :user_trips, only: [:index, :create]
  get 'session/create'
  get 'session/destroy'
  resources :users
  resources :trips, only: [:index]


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
