Rails.application.routes.draw do
  namespace :api do 
    resources :contacts
end
