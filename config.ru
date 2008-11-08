$: << File.dirname(__FILE__) + '/vendor/sinatra/lib'

require 'rubygems'
require 'sinatra'
 
Sinatra::Application.default_options.merge!(
  :run => false,
  :env => :production,
  :views => File.dirname(__FILE__) + '/views'
)


require 'searchparty.rb'
run Sinatra.application