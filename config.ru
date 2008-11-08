$: << File.dirname(__FILE__) + '/vendor/sinatra/lib'
$: << File.dirname(__FILE__) + '/vendor/mechanize/lib'
$: << File.dirname(__FILE__) + '/vendor/json_pure/lib'

require 'rubygems'
require 'sinatra'
 
Sinatra::Application.default_options.merge!(
  :run => false,
  :env => :production,
  :views => File.dirname(__FILE__) + '/views'
)


require 'searchparty.rb'
run Sinatra.application