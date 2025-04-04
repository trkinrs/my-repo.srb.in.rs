require 'rake'
require 'fileutils'
require "tmpdir"

GITHUB_PAGES_BRANCH = "gh-pages"
BUILD_DIR = "_site"

desc "Build the site with Jekyll"
task :build do
  sh "bundle install"
  sh "env && bundle exec jekyll build"
end

desc "Commit source code to main"
task :commit_source do
  sh "git add ."
  sh %(git commit -m "Update source site content" || echo 'Nothing to commit on main')
  sh "git push origin main"
end

desc "Deploy _site to #{GITHUB_PAGES_BRANCH} branch"
task :deploy do
  # Save current branch
  origin = `git config --get remote.origin.url`
  fail "origin_is_empty" if origin.empty?

  Rake::Task[:build].invoke

  current = Dir.pwd
  Dir.mktmpdir do |tmp|
    # Copy accross our compiled _site directory.
    cp_r "_site/.", tmp

    # Switch in to the tmp dir.
    Dir.chdir tmp

    # Prepare all the content in the repo for deployment.
    sh "git init" # Init the repo.
    sh "git checkout #{GITHUB_PAGES_BRANCH} 2>/dev/null || git checkout --orphan #{GITHUB_PAGES_BRANCH}"
    sh "git add . && git commit -m 'Site updated at #{Time.now.utc}'" # Add and commit all the files.

    # Add the origin remote for the parent repo to the tmp folder.
    sh "git remote add origin #{origin}"

    puts "Pushing to #{origin}"
    sh "git push --force origin #{GITHUB_PAGES_BRANCH}"
    Dir.chdir current
  end
end

desc "Full deploy: commit source and publish site"
task default: [ :commit_source, :deploy ]
