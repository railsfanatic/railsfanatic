class Project < ActiveRecord::Base
  acts_as_list
  
  def display_name
    if name.blank?
      client
    else
      client.blank? ? name : "#{client}: #{name}"
    end
  end
end
