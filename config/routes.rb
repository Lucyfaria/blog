Rails.application.routes.draw do
  get 'pricelist/index'
  devise_for :users
  resources :users
  resources :fractions

  # get 'fractions'
  root 'home#index'
  
  devise_scope :user do
    get '/users/sign_in' => 'devise/sessions#new'
    get '/users/sign_out' => 'devise/sessions#destroy'
    get '/users/new_ma' => 'devise/registrations#index'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
