Rails.application.routes.draw do
  resources :comments
  resources :users
  resources :blogs
  resources :recipes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/user/:id", to: "users#user_name"
  get "/mostliked", to: "blogs#most_liked"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
