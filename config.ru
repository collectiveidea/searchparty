$: += Dir[File.dirname(__FILE__) + '/vendor/*/lib'].map {|f| File.expand_path(f) }

require 'rubygems'
require 'sinatra'
 
Sinatra::Application.default_options.merge!(
  :run => false,
  :env => :production,
  :views => File.dirname(__FILE__) + '/views'
)


require 'searchparty.rb'
run Sinatra.application