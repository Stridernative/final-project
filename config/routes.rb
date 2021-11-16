Rails.application.routes.draw do
  resources :quotes, only: [:create]
  resources :services, only: [:create, :update, :destroy, :index, :show]
  resources :users , only: [:show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
