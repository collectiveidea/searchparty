load 'deploy'

set :application, "searchparty"
set :repository, "git@github.com:collectiveidea/#{application}.git"

role :app, "search.collectiveidea.com"
role :web, "search.collectiveidea.com"
role :db,  "search.collectiveidea.com", :primary => true

set :deploy_to, "/home/collectiveidea/search.collectiveidea.com"
set :user, "collectiveidea"
set :use_sudo, false
set :scm, :git
set :branch, 'master'
set :git_enable_submodules, true
set :deploy_via, :remote_cache
set :ssh_options, {:forward_agent => true}

namespace :deploy do
  desc "mod_rails restart"
  task :restart do
    run "touch #{current_path}/tmp/restart.txt"
  end
end