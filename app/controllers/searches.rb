class Searches < Application

  # ...and remember, everything returned from an action
  # goes to the client...
  def index
    render
  end
  
  def create
    render
  end
  
  def service
    render "#{params[:callback]}(#{Delicious.new(cookies['delicious.username']).search(params[:q]).to_json})", :format => :json
  end
  
end
