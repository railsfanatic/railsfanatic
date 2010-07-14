require 'spec_helper'

describe "/projects/index.html.erb" do
  include ProjectsHelper

  before(:each) do
    assigns[:projects] = [
      stub_model(Project),
      stub_model(Project)
    ]
  end

  it "renders a list of projects" do
    render
  end
end
