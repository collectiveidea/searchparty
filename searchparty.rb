require 'rubygems'
require 'sinatra'
require 'json'

helpers do
  def query
    escape_html params[:q] if params[:q]
  end
end

require 'mechanize'

class Delicious
  URL = "http://delicious.com/search?p=%s&u=%u&context=userposts"
  
  def initialize(username)
    @url = URL.sub('%u', username.to_s)
  end
  
  def search(query)
    page = WWW::Mechanize.new.get @url.sub('%s', query)
    user, everyone = %w(context-bookmarklist everyones-bookmarklist).map do |list|
      (page.root / "##{list} li.post").map do |item|
        {
          :title => (item / '.taggedlink').inner_html,
          :description => (item / '.description').inner_html,
          :url => (item / '.taggedlink').first.attributes['href'],
          :user => (item / '.user').inner_html
          # :tags => (item / 'a[rel=tag]').map {|tag| tag.inner_html }
        }
      end
    end
    
    {:user => user, :everyone => everyone}
  end
end

get '/' do
  erb :index
end

get '/search' do
  erb :search
end

get '/delicious' do
  content_type 'application/json', :charset => 'utf-8'
  "#{params[:callback]}(#{Delicious.new(request.cookies['delicious.username']).search(params[:q]).to_json})"
end