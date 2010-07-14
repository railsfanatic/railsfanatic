class Project < ActiveRecord::Base
  acts_as_list
  
  def display_name
    if name.blank?
      client
    else
      client.blank? ? name : "#{client}: #{name}"
    end
  end
  
  def link_url
    if url.index("http://")
      url
    else
      "portfolio/#{url}/index.html"
    end
  end
end
