(function($) {
  'use strict'
  $.fn.background = function(options) {
    var settings = $.extend({
    }, options);
    var constructor = function($element) {
      var $image = $element.find('img')
      var image = $image.attr('src');
      if (image !== undefined && !$element.hasClass('bg-loaded')) {
        $image.css({
          'display': 'none'
        })
        $element.css({
          'background-image': 'url(' + image + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center'
        }).addClass('bg-loaded');
      } else {
        $element.addClass('image-not-found');
      }
    };
    return this.each(function() {
      constructor($(this));
    });
  };
}(jQuery));