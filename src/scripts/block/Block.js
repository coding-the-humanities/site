(function(){
  'use strict';
  angular.module('cth').factory('Block', ['stringManipulators', Block]);
      
  function Block(stringManipulators) {

    var content = function(block){
      this.title = block.title;
      this.content = block.content;
      this.authors = block.authors;
      this.headerImage = block.images[0];
      this.tags = block.tags;

      this.posted = new Date(block.posted);
      this.id = stringManipulators.dasherize(block.title);
      this.layout = block.layout || 'default';
      this.order = block.order || 'n/a';
    };

    return content;
  }
})();
