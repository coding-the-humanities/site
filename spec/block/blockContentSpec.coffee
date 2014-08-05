describe 'blockContent directive', ->

  beforeEach(module('cth'))
  beforeEach(module('block/blockContent.html'))

  markdown = """
    ## Hello

    > Hi There
  """

  beforeEach ->
    inject ($injector) ->
      $rootScope = $injector.get '$rootScope'
      $compile = $injector.get '$compile'

      @$httpBackend = $injector.get '$httpBackend'
      @$httpBackend.expectGET('api/posts.json').respond('{}')

      @$scope = $rootScope.$new()
      @$scope.markdown = markdown

      @element = angular.element("<block-content markdown='markdown'></block-content>")
      $compile(@element)(@$scope)
      @$scope.$digest()

  describe 'default state', ->
    it 'has a class of markdown', ->
      blockquote = @element.find('blockquote')
      setTimeout ->
        expect(blockquote.hasClass('blockquote-reverse')).toBe(true)
      , 0
