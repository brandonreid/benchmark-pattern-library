# About Our Font Library
We use [fontello](http://fontello.com/) for our custom icon font library. 

## Updating the icon font pack
1. Go to fontello and import the `config.json` file found in `./fonts/benchmark_icons/`. Then you can edit & download an updated icon font pack.
2. Once you've downloaded the updated font pack...
	- Replace the font files in the pattern library with the new ones in the font pack.
	- Update the @font-face URLS and the icon codes in the pattern library from the font packs `css/benchmark.css` file.
	- Replace the `config.json` file.
	- Update the documentation with any new icons. The easiest way to do it is to remove all the references that are there and rebuild them from the icon codes using multi-line editing kung fu.
3. Recompile the pattern library with `gulp dev` and make sure the icons all check out.

## Creating a New Icon
If you're lucky, there may be a font-awesome (or other font family) option that fontello provides. Make sure to select an icon that matches the general style of the current Benchmark Icon Font.

If there is not a suitable icon, follow these steps to build one properly.
1. In a vector graphics editor, make a 14px by 14px canvas and turn on a pixel by pixel grid.
2. Try and design to the grid. Only work with pure black. Remember that a shape taking up half of 1px will display 50% black once rendered as a bitmap, you may want that square to be darker for more clarity, etc. Strive for a pixel perfect sharp icon and keep the shape simple and suggestive.
3. Once your design is done, all shapes must be collapsed into a single compound path.
4. Save the original file and an `.svg` version. Drop the svg version into fontello, follow the instructions above for updating the icon font pack and give the new icon a clear name that suggests it's use case.