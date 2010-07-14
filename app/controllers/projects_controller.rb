class ProjectsController < ApplicationController
  before_filter :authorize, :except => [:index, :show]
  
  def index
    @projects = Project.all.shuffle
  end
  
  def show
    @project = Project.find(params[:id])
  end
  
  def new
    @project = Project.new
  end
  
  def edit
    @project = Project.find(params[:id])
  end
  
  def create
    @project = Project.new(params[:project])
    if @project.save
      flash[:notice] = "Project was successfully created."
      redirect_to projects_path
    else
      render "new"
    end
  end
  
  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(params[:project])
      flash[:notice] = "Project was successfully updated."
      redirect_to projects_path
    else
      render "edit"
    end
  end
  
  def edit_individual
    if params[:project_ids].blank?
      @projects = Project.all
    else
      @projects = Project.find(params[:project_ids])
    end
  end
  
  def update_individual
    @projects = Project.update(params[:projects].keys, params[:projects].values).reject { |p| p.errors.empty? }
    if @projects.empty?
      flash[:notice] = "Projects updated"
      redirect_to projects_url
    else
      render :action => "edit_individual"
    end
  end
  
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    flash[:notice] = "Project was successfully destroyed."
    redirect_to projects_path
  end
  
  def sort
    params[:sortable].each_with_index do |id, index|
      Project.update_all(['position=?', index+1], ['id=?', id])
    end
    render :nothing => true
  end
end
