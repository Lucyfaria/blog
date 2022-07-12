# NOTES FOR ME
rails server -> starts server

rails g controller home index -> make new "Website"

railes routes -> shows all routes 

<%=  %> -> outputs embedded ruby code to screen
<% %> -> interprets embedded ruby code

<%= link_to 'Fraktionen', home_frak_path, class:"nav-link"%> -> link to other sites

rails g scaffold 'modulname' columname:datatype -> creates a scaffold for CRUD database

rails db:migrate -> create schema

Gems can be found at: rubygems.org

Gem devise is for user management

rails routes URI Patter -> to see which method to use and which routes to copy

devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
end
--> for devise_sign_out
