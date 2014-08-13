describe 'Blocks Service', ->

  
  beforeEach module 'cth', ($provide) ->
    order = 2
    posted = 1
    tags = ['pilot', 'about']

    $provide.value 'Block', ->
      this.order = order
      this.posted = posted
      this.tags = [tags.pop()]
      order -= 1
      posted += 1
    null

  beforeEach ->
    inject ($injector, $httpBackend) ->
      @Blocks = $injector.get 'Blocks'
      @httpBackend = $httpBackend

  describe 'Blocks', ->

    beforeEach ->
      blocks =
        blocks: [1,2]


      @httpBackend.expectGET(@url).respond(blocks)

    describe 'defaults', ->
      beforeEach ->
        params =
          url: 'api/pilot.json'
        @promise = @Blocks.getBlocks(params)

      it 'initiates the http call', ->
        expect(angular.isFunction(@promise.then)).toBeTruthy()
        @httpBackend.flush()

      it 'returns an array', ->
        @promise.then (data)->
          blocks = data
          expect(blocks.length).toBe(2)
        @httpBackend.flush()

      it 'should return them in order by default', ->
        @promise.then (data)->
          blocks = data
          expect(blocks[0].order).toBe(1)
          expect(blocks[1].order).toBe(2)
        @httpBackend.flush()

    describe 'different sort order', ->
      beforeEach ->
        params =
          url: 'api/pilot.json'
          order: 'posted'
        @promise = @Blocks.getBlocks(params)

      it 'should return them ordered by posted property', ->
        @promise.then (data)->
          blocks = data
          expect(blocks[0].posted).toBe(1)
          expect(blocks[1].posted).toBe(2)
        @httpBackend.flush()

    describe 'filtered by tag', ->
      beforeEach ->
        params =
          url: 'api/pilot.json'
          filterTag: 'about'
        @promise = @Blocks.getBlocks(params)

      it 'should return only the right post', ->
        @promise.then (data)->
          blocks = data
          expect(blocks.length).toBe(1)
          expect(blocks[0].tags).toContain('about')
        @httpBackend.flush()
