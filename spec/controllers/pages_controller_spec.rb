require 'spec_helper'

describe PagesController do
  integrate_views
  
  describe "GET 'index'" do
    it "should be successful" do
      get 'index'
      response.should contain "Welcome"
    end
  end
end
