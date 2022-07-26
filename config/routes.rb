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
    #TODO: Ausloggen reparieren
    get '/users/employees' => 'users#show'
    
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
