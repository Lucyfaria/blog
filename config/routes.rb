Rails.application.routes.draw do
  get 'pricelist/index'
  devise_for :users
  resources :users
  resources :fractions

  namespace :api do
    namespace :v1 do
      get 'home/index'
      post 'home/create'
      delete 'home/:id', to: 'home#destroy'
    end
  end
  # get 'fractions'
  root 'home#index'
  
  
  devise_scope :user do
    get '/users/sign_in' => 'devise/sessions#new'
    get '/users/sign_out' => 'devise/sessions#destroy'
    #TODO: Ausloggen reparieren
    # get '/users/employees' => 'users#index'
    
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
