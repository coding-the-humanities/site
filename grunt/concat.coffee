module.exports =
  posts:
    src: ['src/yaml/tmp/posts/**/*.json']
    dest: 'dev/api/posts.json'
    options:
      banner: '{"blocks": ['
      footer: "]}"
      separator: ','

  pilot:
    src: ['src/yaml/tmp/pilot/**/*.json']
    dest: 'dev/api/pilot.json'
    options:
      banner: '{"blocks": ['
      footer: "]}"
      separator: ','

  vendor:
    options:
      sourceMap: true
      sourceMapName: 'dev/vendor.js.map'
      sourceMapStyle: 'embed'

    src: [
      'src/vendor/jquery.js'
      'src/vendor/lodash.js'
      'src/vendor/firebase.js'
      'src/vendor/viewport-units-buggyfill.js'
      'src/vendor/showdown.js'
      'src/vendor/scroll-into-view.js'
      'src/vendor/angular.js'
      'src/vendor/carousel.js'
      'src/vendor/transition.js'
      'src/vendor/angular-ui-router.js'
      'src/vendor/angular-sanitize.js'
      'src/vendor/angular-animate.js'
      'src/vendor/angularfire.js'
    ]
    dest: 'dev/vendor.js'

  app:
    options:
      sourceMap: true
      sourceMapName: 'dev/app.js.map'
      sourceMapStyle: 'embed'

    src: [
      'src/scripts/app.js'
      'src/scripts/routes.js'
      'src/scripts/appCtrl.js'
      'src/scripts/block/BlockCtrl.js'
      'src/scripts/block/Blocks.js'
      'src/scripts/block/blockItem.js'
      'src/scripts/block/blockItemCtrl.js'
      'src/scripts/block/blockContent.js'
      'src/scripts/block/blockContentCtrl.js'
      'src/scripts/profile/profilesCtrl.js'
      'src/scripts/common/directives/disable-ng-animate.js'
      'src/scripts/common/services/scroll.js'
      'src/scripts/common/services/string-manipulators.js'
      'src/scripts/common/filters/markdown.js'
      'src/scripts/common/filters/underscorize.js'
      'src/scripts/templates.js'
    ]
    dest: 'dev/app.js'
