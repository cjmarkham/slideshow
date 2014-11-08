Initialization
=

To get started, simply call the ```slideshow``` method on a jQuery DOM element.

```
$("#element").slideshow();
```

Options
=

Options can be passed into the function as an object

```
var options = {};
$("#element").slideshow(options);
```

Accepted Options
=

* container
  - The wrapper for the slideshow
  - Type: ```jQuery DOM element```
  - Default:```$("#slideshow-inner");```
* slideshow
  - The actual slideshow
  - Type: ```jQuery DOM element```
  - Default: ```$("#slideshow");```
* startIndex
  - The starting elements index
  - Type: ```integer```
  - Default: ```slideshow li with class of active```
* speed
  - Changes the slide speed
  - Type: ```integer```
  - Default: ```300```
* itemWidth
  - The width of the li's within the slideshow
  - Type: ```integer```
  - Default: ```85```
* onSlideStart
  - A function which is invoked before the slideshow starts to animate
  - Type: ```function```
* onSlideEnd
  - A function which is invoked when the slideshow has finished animating
  - Type: ```function```
