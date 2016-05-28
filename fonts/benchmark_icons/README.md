# About Our Font Library
We use [fontello](http://fontello.com/) for our custom icon font library. 

## Updating the icon font pack
1. Go to fontello and import the `benchmark.svg` file, it will load any custom icons we've made. 
2. Import the `config.json` file to make sure the right fonts are selected with the correct names/codes/etc. Then you can edit & download an updated icon font pack.
3. Once you've downloaded the updated font pack, make sure to copy the icon codes from `css/benchmark-codes.css` and replace the codes in `icons.less` in the app. Delete the icons in the apps `app/fonts/benchmark_icons` folder and replace them with the ones you downloaded. Also make sure to replace the `config.json` file.
4. Recompile the app with gulp to make sure it shows up.