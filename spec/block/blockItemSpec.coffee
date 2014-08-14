describe 'blockItem directive', ->

  beforeEach(module('cth'))
  beforeEach(module('block/blockItem.html'))

  block =
    title: "Hello World"
    layout: "posts"
    images:
      url: "#/images/test0.jpg"

  beforeEach ->
    inject ($injector) ->
      $rootScope = $injector.get '$rootScope'
      $compile = $injector.get '$compile'

      @$httpBackend = $injector.get '$httpBackend'

      @$scope = $rootScope.$new()
      @$scope.block = block
      @element = angular.element("<block-item block='block'></block-item>")
      $compile(@element)(@$scope)
      @$scope.$digest()

      @stateLink = @element.find('.state-link')
      @expansionLink = @element.find('.expansion-link')


  describe 'default state', ->
    it 'has a class of block', ->
      expect(@element.hasClass('block')).toBe(true)

    it 'has a class of posts', ->
      expect(@element.hasClass('posts')).toBe(true)

    it 'does not have a class selected', ->
      expect(@element.hasClass('selected')).toBe(false)

    it 'has a visible state link', ->
      expect(@stateLink.hasClass('ng-hide')).toBe(false)

    it 'has an invisible expansion link', ->
      expect(@expansionLink.hasClass('ng-hide')).toBe(true)

  describe 'expand item', ->
    beforeEach ->
      @$httpBackend.expectGET('api/posts.json').respond('{}')

    it 'toggles its expanded class', ->
      expect(@element.hasClass('expanded')).toBe(false)
      @expansionLink.click()
      expect(@element.hasClass('expanded')).toBe(true)


  describe 'selected item', ->
    beforeEach ->
      @$httpBackend.expectGET('api/posts.json').respond('{}')
      @$scope.block.selected = true
      @$scope.$digest()

    it 'has a class of selected', ->
      expect(@element.hasClass('selected')).toBe(true)

    it 'does not have a visible state link', ->
      expect(@stateLink.hasClass('ng-hide')).toBe(true)

    it 'has a visible expansion link', ->
      expect(@expansionLink.hasClass('ng-hide')).toBe(false)
