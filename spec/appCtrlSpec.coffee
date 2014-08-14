describe 'AppCtrl', ->

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'
      @$httpBackend = $injector.get '$httpBackend'

      $state = $injector.get '$state'
      @$timeout = $injector.get '$timeout'
      @$scope = @$rootScope.$new()

      $state.current.name = 'posts'

      @AppCtrl = $controller 'AppCtrl',
        $scope: @$scope
        $state: $state
        $timeout: @$timeout

  describe 'defaults', ->
    it 'should show the header', ->
      expect(@AppCtrl.showHeader).toBeTruthy()

    it 'has no active prop on any routes', ->
      activeRoute = _.first(@AppCtrl.routes, 'active')
      expect(activeRoute.length).toBe(0)

  describe 'after timeout', ->
    beforeEach ->
      @$httpBackend.expectGET('api/posts.json').respond('')
      @$timeout.flush()

    it 'should have one active route', ->
      activeRoute = _.filter(@AppCtrl.routes, 'active')
      expect(activeRoute.length).toBe(1)
      expect(activeRoute[0].name).toBe('posts')

    describe 'after route changes', ->
      beforeEach ->
        spyOn(@$scope, '$broadcast')
        @$rootScope.$broadcast '$stateChangeSuccess',
          name: 'essays.block'

      it 'broadcasts the pageReady event', ->
        expect(@$scope.$broadcast).toHaveBeenCalledWith('pageReady')

      it 'should have one active route', ->
        activeRoute = _.filter(@AppCtrl.routes, 'active')
        expect(activeRoute.length).toBe(1)
        expect(activeRoute[0].name).toBe('essays')
