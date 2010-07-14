ActionController::Routing::Routes.draw do |map|
  map.resources :projects, :collection => { :sort => :post, :edit_individual => :post, :update_individual => :put }
  
  map.resources :sessions
  map.login "login", :controller => "sessions", :action => "new"
  map.logout "logout", :controller => "sessions", :action => "destroy"
  map.root :controller => "pages", :action => "index"
  map.contact "contact", :controller => "pages", :action => "contact"
  map.resume "resume", :controller => "pages", :action => "resume"
  # map.connect ':controller/:action/:id.:format'
end
