Rails.application.routes.draw do  
  resources :users, only: [:create, :show, :index]
  resources :trips, only: [:index]

  # post "/login", to "sessions#create"

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
