# These helper methods can be called in your template to set variables to be used in the layout
# This module should be included in all views globally,
# to do so you may need to add this line to your ApplicationController
#   helper :layout
module LayoutHelper
  def title(page_title, show_title = true)
    @content_for_title = page_title.to_s
    @show_title = show_title
  end
  
  def show_title?
    @show_title
  end
  
  def stylesheet(*args)
    content_for(:head) { stylesheet_link_tag(*args) }
  end
  
  def javascript(*args)
    content_for(:head) { javascript_include_tag(*args) }
  end
  
  def navigation_links
    links = [
      ["Home", "pages", "index"],
      ["Portfolio", "projects", "index"],
      ["Resumé", "pages", "resume"],
      ["Contact", "pages", "contact"]
    ]
    
    html = ""
    links.each do |link|
      controller = request[:controller]
      action = request[:action]
      id = (link[1] == controller && link[2] == action) ? "current" : nil
      html += link_to(link[0], {:controller => link[1], :action => link[2]}, :id => id)
    end
    html
  end
end
