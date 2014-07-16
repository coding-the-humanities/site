describe 'Post', ->
  beforeEach(module('cth'))

  describe 'api calls', ->

    beforeEach inject ($injector) ->
      @service = $injector.get('Post')
      @$httpBackend = $injector.get('$httpBackend')

    it "makes an ajax call to '/api/posts.json'", ->
      @$httpBackend.expectGET('/api/posts.json').respond('{"name": "hello"}')
      @service.getAll().then()
      @$httpBackend.flush()