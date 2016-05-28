# Benchmark Pattern Library
UI Patterns for Benchmark Intelligence applications.

[Live Library](http://usebenchmark.github.io/pattern-library)

_^ Note that this library leverages the "shadow-dom" and will only really work in the chrome browser._

This library was built using [livingcss](https://github.com/straker/livingcss).

## Getting Started
  * `git clone https://github.com/usebenchmark/pattern-library.git`
  * `npm install -g gulp` if you haven't before.
  * `npm install`
  * `gulp dev` to run a live reloading local instance on `localhost:7000`

## Deploying to Github Pages
Run `gulp deploy` from a clean master branch.

OR....

* Delete the gh-pages branch.
* Create a temporary deployment branch: `git checkout -b temp-deploy`
* Make sure you've ran `gulp dev` and have a fresh build of `pattern_library`.
* Remove `pattern_library` from `.gitignore`.
* Add and commit the pattern library: `git add pattern_library && git commit -m "Deploy Pattern Library"`
* Push to a new subtree gh-pages branch: `git subtree push --prefix pattern_library origin gh-pages`
* The pattern library is now deployed at http://usebenchmark.github.io/pattern-library
* Checkout your master branch again and delete the temporary deployment branch: `git checkout master && git branch -D temp-deploy`

### Updating the NPM Package
* Work with a clean master.
* Update the version number in `package.json` and commit that to master.
* Run `npm publish`.
* Update the package in the Benchmark App or anywhere else it's deployed.
* [Here's the page where the NPM package is.](https://www.npmjs.com/package/benchmark-patterns)
