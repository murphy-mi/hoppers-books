Rails.application.routes.draw do
  # namespace :api do
  # end
  resources :books, only: [:index, :show, :create]
  resources :cart_items, except: [:update]
  resources :wishlists, only: [:index, :show, :create]
  resources :purchases, only: [:index, :show]
  resources :best_sellers, only: [:index]

  resources :users, only: [:index]
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
