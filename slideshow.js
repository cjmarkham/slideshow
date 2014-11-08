/* global $, console */
/* jshint noempty:true */

var Slideshow = function (options) {
  "use strict";

  var self = this;
  this.options = $.extend({}, options);

  this.init = function () {
    this.container = this.options.container || $("#slideshow-inner");
    this.slideshow = this.options.slideshow || $("#slideshow");

    this.startIndex = this.options.startIndex || $('li', this.slideshow).index($('.active'));
    this.index = this.startIndex;

    if (this.index === -1) {
      console.error("No index found for slideshow");
      return false;
    }

    this.currentMargin = this.slideshow.css("margin-left").toInt();

    this.speed = this.options.speed || 300;

    this.items = this.slideshow.find('li');
    this.itemCount = this.items.length;
    this.itemWidth = this.options.itemWidth || 85;

    this.navigation = options.navigation || $('.navigation');
    this.left = this.navigation.find('.left');
    this.right = this.navigation.find('.right');

    this.left.on('click', self.slideLeft);
    this.right.on('click', self.slideRight);

    this.active = this.slideshow.find('li.active');

    this.marginOffset = this.index * this.itemWidth;

    this.sliding = false;

    this.items.each(function () {
      $(this).on('click', self.scrollToItem);
    });

    this.onSlideStart = options.onSlideStart || function () {};
    this.onSlideEnd = options.onSlideEnd || function () {};
  };

  this.updateMargin = function () {
    self.currentMargin = self.slideshow.css("margin-left").toInt();
    console.log(self.currentMargin, self.index);
  };

  this.slideLeft = function () {
    if (self.sliding === true) {
      return false;
    }

    var prevIndex = self.index - 1;
    if (prevIndex < 0) {
      prevIndex = self.itemCount - 1;
    }

    var prev = self.slideshow.find('li').eq(prevIndex);
    self.setActive(prev);
    self.index = prevIndex;

    self.animate(true);
  };

  this.slideRight = function () {
    if (self.sliding === true) {
      return false;
    }

    var nextIndex = self.index + 1;
    if (nextIndex > self.itemCount - 1) {
      nextIndex = 0;
    }

    var next = self.slideshow.find('li').eq(nextIndex);
    self.setActive(next);
    self.index = nextIndex;

    self.animate();
  };

  this.setActive = function (element) {
    self.active.removeClass('active');
    self.active = element;
    self.active.addClass('active');
  };

  this.animate = function (reverse) {
    self.sliding = true;
    self.onSlideStart(self.index);

    var margin = -(self.index * self.itemWidth);
    if (reverse === true) {
      margin = (self.startIndex - self.index) * self.itemWidth;
    } else {
      margin += self.marginOffset;
    }

    self.slideshow.animate({
      marginLeft: margin
    }, self.speed, function () {
      self.currentMargin = margin;
      self.sliding = false;

      self.onSlideEnd(self.index);
    });
  };

  this.scrollToItem = function () {
    var index = $('li', this.slideshow).index($(this));
    self.index = index;
    self.setActive($(this));
    self.animate();
  };

  return this;

};

$.fn.slideshow = function (options) {
  "use strict";
  return this.each(function () {
    var slideshow = new Slideshow(options);
    return slideshow.init();
  });
};

String.prototype.toInt = function () {
  return parseInt(this, 10);
};
