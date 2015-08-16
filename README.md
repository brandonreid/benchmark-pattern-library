# benchmark-pattern-library
A library of UI patterns for use in the Benchmark Intelligence analytics platform.

### [Live Website](http://usebenchmark.github.io/benchmark-pattern-library/)

## Getting Started
### Install Dependencies
#### Jekyll
To do this you'll need Ruby installed and some other stuff, follow the [Jekyll Documentation](http://jekyllrb.com/docs/installation/).

#### Jekyll Less
`[sudo] gem install jekyll-less`  

For Jekyll Less, you'll also need:  

`[sudo] gem install therubyracer`

#### CSS Autoprefixer
`[sudo] gem install octopress-autoprefixer`

### Starting Dev Environment
1. `cd` into the pattern library repo after you clone it.  
1. Run `jekyll serve` to start your local server and initiate watches.  
2. Go to `http://localhost:4000/`. When you make a change, Jekyll will recompile automatically, but you will have to refresh your browser to see the changes.

### Deploying
This is what I've got for now, not perfect but it will do.
1. Delete the gh-pages branch in this repo.
2. Make sure you push whatever changes to master after running `jekyll serve` and have made sure the files in `_site` are updated, we'll be pushing that folder to a subtree branch.
3. Run `git subtree push --prefix _site origin gh-pages` to push the _site folder to a new gh-pages branch.