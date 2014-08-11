describe 'Blocks Service', ->
  
  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector, $httpBackend, $q) ->
      @Blocks = $injector.get 'Blocks'
      @httpBackend = $httpBackend
      @blocks = {
        blocks: [1,2]
      }

  describe 'Blocks', ->

    it 'initiates the http call', ->
      url = 'api/pilot.json'
      @httpBackend.expectGET(url).respond(@blocks)
      promise = @Blocks.getBlocks(url)
      expect(angular.isFunction(promise.then)).toBeTruthy()

      promise.then (data)->
        blocks = data
        expect(blocks.length).toBe(2)

      @httpBackend.flush()
