describe 'AppCtrl', ->

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'
      @scope = @$rootScope.$new()
      @AppCtrl = $controller('AppCtrl', {$scope: @scope})

  describe 'setting post order', ->
    it 'should order them by posted date in descending order', ->
      expect(@AppCtrl.postOrder).toBe('-posted')

