(function(){
  'use strict';

  angular.module('cth').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['Blocks', 'stringManipulators' , function(Blocks, stringManipulators){

            var params = {
              url: 'api/posts.json',
              order: 'posted',
              filterTag: 'post'
            };

            return Blocks.getBlocks(params).then(function(blocks){
              return blocks.reverse();
            }); 
          }]
        }
      })
      .state('posts.block', {
        url: '/:block_id',
      })
      .state('essays', {
        url: '/essays',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['Blocks', 'stringManipulators' , function(Blocks, stringManipulators){

            var params = {
              url: 'api/posts.json',
              order: 'posted',
              filterTag: 'article'
            };

            return Blocks.getBlocks(params).then(function(blocks){
              return blocks;
            }); 
          }]
        }
      })
      .state('essays.block', {
        url: '/:block_id',
      })
      .state('pilot', {
        url: '/pilot',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['Blocks', 'stringManipulators' , function(Blocks, stringManipulators){

            var params = {
              url: 'api/pilot.json',
              order: 'order'
            };

            return Blocks.getBlocks(params).then(function(blocks){
              return blocks;
            }); 
          }]
        }
      })
      .state('pilot.block', {
        url: '/:block_id',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['Blocks', 'stringManipulators' , function(Blocks, stringManipulators){

            var params = {
              url: 'api/posts.json',
              order: 'order',
              filterTag: 'about'
            };

            return Blocks.getBlocks(params).then(function(blocks){
              return blocks;
            }); 
          }]
        }
      })
      .state('about.block', {
        url: '/:block_id',
      });

    $urlRouterProvider.when('/', '/posts');
  }


})();
