Package.describe({
  summary: 'Less version of Bootstrap 3 for Meteor.js'
})

Package.on_use(function(api){

  api.use('jquery', 'client');

  // javascript
  api.add_files([
    'lib/js/transition.js',
    'lib/js/alert.js',
    'lib/js/button.js',
    'lib/js/carousel.js',
    'lib/js/collapse.js',
    'lib/js/dropdown.js',
    'lib/js/modal.js',
    'lib/js/tooltip.js',
    'lib/js/popover.js',
    'lib/js/scrollspy.js',
    'lib/js/tab.js',
    'lib/js/affix.js',
  ], 'client');

});
