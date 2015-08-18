---
layout: post
title:  "Grid Framework"
date-updated:   2015-08-15 16:13:16
card_order: 2
---
## Sidebar and Main
The sidebar and main stage are custom, so they don't use our grid system.

## 24 Column Bootstrap Grid
[You can learn the basics of the bootstrap grid here](http://getbootstrap.com/css/#grid).  
The only difference with ours is that it's 24 columns by default, and we have a `no-gutters` modifier. 

#### Custom Modifier
Use the class `no-gutters` on the div where `row` is declared and the gutters will be stripped. This is nice if you just want to make 2 columns, for example, but don't want to deal with the load of extra divs needed when normally using the grid.

Here are two columns __with__ gutters. Requires a container div for things to line up right, plus you have to deal with some inherent padding.
<div class="container-fluid" style="margin-bottom: 0.5em;">
	<div class="row">
		<div class="col-xs-12" style="outline: 1px solid red;">col-xs-12</div>
		<div class="col-xs-12" style="outline: 1px solid blue">col-xs-12</div>
	</div>
</div>

{% highlight html %}
<div class="container-fluid">
	<div class="row">
		<div class="col-xs-12">col-xs-12</div>
		<div class="col-xs-12">col-xs-12</div>
	</div>
</div>
{% endhighlight %}

Here are two columns with no gutters. Note that this does get wonky if there is a container div because the container has some negative margins compensating for row/col spacing.

<div class="row no-gutters" style="margin-bottom: 0.5em;">
	<div class="col-xs-12" style="outline: 1px solid red;">col-xs-12</div>
	<div class="col-xs-12" style="outline: 1px solid blue">col-xs-12</div>
</div>

{% highlight html %}
<div class="row no-gutters">
	<div class="col-xs-12">col-xs-12</div>
	<div class="col-xs-12">col-xs-12</div>
</div>
{% endhighlight %}

## Flexbox Grid
There are situations where you want things to have the same height or need any of the other flexbox magic. Below is an example of our pre-built flexbox classes. Use these in tandem with the normal Bootstrap grid classes to get the benefit of flexbox and a graceful fall back.

<div class="container-fluid" style="margin-bottom: 0.5em;">
	<div class="row flex-container">
		<div class="col-xs-8 flex-item" style="outline: 1px solid red;">Col 1 with short content.</div>
		<div class="col-xs-8 flex-item flex-item-center" style="outline: 1px solid blue;">Col 2 with short content and centering modifier.</div>
		<div class="col-xs-8 flex-item" style="outline: 1px solid green;">Col 3 with tall content. <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, odio repudiandae reprehenderit provident esse modi delectus et similique amet veniam.</p></div>
	</div>
</div>

{% highlight html %}
<div class="container-fluid">
	<div class="row flex-container">
		<div class="col-xs-8 flex-item">Col 1 with short content.</div>
		<div class="col-xs-8 flex-item flex-item-center">Col 2 with short content and centering modifier.</div>
		<div class="col-xs-8 flex-item">Col 3 with tall content. <p>Lorem ipsum . . .</p></div>
	</div>
</div>
{% endhighlight %}

#### Notes...

*	Notice that the flexbox classes (`flex-container` and `flex-item`) are used in conjunction with bootstrap grid markup. This is an extra precautionary measure in case the browser or device a user is on doesn't support flexbox (which is still fairly modern).
*	If you don't use the `flex-item` class, the columns will still have the same heights, but will have no gutters between.
*	The `flex-item-center` class will center content in the column. This may require some customization when the inner content gets more complicated. Also it must be used in conjunction with the `flex-item` class, although if we find a need, we can separate them.
