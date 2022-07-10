Rails.application.routes.draw do
  get 'pricelist/index'
  devise_for :users
  resources :fractions
  # get 'fractions'
  root 'home#index'
  
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
