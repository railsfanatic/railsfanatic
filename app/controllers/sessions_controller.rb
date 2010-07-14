class SessionsController < ApplicationController
  def new
    reset_session
  end

  def create
    session[:crypted_password] = Digest::SHA1.hexdigest(params[:password])
    flash[:notice] = "Successfully logged in."
    redirect_to root_path
  end

  def destroy
    reset_session
    flash[:notice] = "Successfully logged out."
    redirect_to root_path
  end
end
