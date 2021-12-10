(function($) {
  'use strict';
  Drupal.behaviors.dark_mode = {
    attach: function (context, settings) {
      jQuery('.dark-mode', context).once('dark_mode').each(function() {
        $('.dark-mode').click(function () {
          $('body').toggleClass('dark');

          const body_element = document.querySelector('body');
          const button = document.querySelector('.dark-mode');
          if (body_element.classList.contains('dark')) {
            button.innerHTML = drupalSettings.simple.dark_mode.switch_to_light;
          }
          else {
            button.innerHTML = drupalSettings.simple.dark_mode.switch_to_dark;
          }
        })
      });
    }
  }
})(jQuery);
