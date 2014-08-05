describe 'BlockContentCtrl', ->

  beforeEach(module('cth'))

  content = "<h1>Hello World</h1>"

  beforeEach ->
    inject ($injector) ->
      @controllerConstructor = $injector.get '$controller'
      @$state = $injector.get '$state'

      @scope = {}
      @scope.content = content


      BlockContentCtrl = @controllerConstructor 'BlockContentCtrl',
        $scope: @scope

      @content = BlockContentCtrl.content

  describe 'markdown conversion', ->
    it 'adds classes to blockquotes', ->
