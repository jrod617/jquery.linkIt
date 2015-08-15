/*
 * name: LinkIt
 * author: Mutiny
 * version 0.1.0
 * license: MIT
 */
 
(function($) {
  $.fn.linkIt = function(options){
    
    // Default Setings
    var settings = $.extend({
      href: null,
      text: null,
      target: '_self'
    }, options);
    
    // Validation
    if(settings.href === null){
      console.log("You need an href option for LinkIt to work");
      return this;
    }
    
    // Performs this function on each element you attach this plugin to
    return this.each(function() {
      var object = $(this);
      
      if(settings.text === null) {
        settings.text = object.text();
      }
      
      object.wrap('<a target="' + settings.target + '" href="' + settings.href + '">').text(settings.text);
    });
  };
}(jQuery));