jQuery Slideshow plugin
=========

Initialization
===

To get started, simply call the ```slideshow``` method on a jQuery DOM element.

```
$("#element").slideshow();
```

Options
===

Options can be passed into the function as an object

```
var options = {};
$("#element").slideshow(options);
```

Accepted Options
=

* container
  The wrapper for the slideshow
  ```jQuery DOM element```
  ```default: $("#slideshow-inner");```
* slideshow
  The actual slideshow
  ```jQuery DOM element```
  ```default: $("#slideshow");```
* startIndex
  The starting elements index
  ```integer```
  ```default: slideshow li with class of active```
* speed
  Changes the slide speed
  ```integer```
  ```default: 300```
* itemWidth
  The width of the li's within the slideshow
  ```integer```
  ```default: 85```
* onSlideStart
  A function which is invoked before the slideshow starts to animate
  ```function```
* onSlideEnd
  A function which is invoked when the slideshow has finished animating
  ```function```
