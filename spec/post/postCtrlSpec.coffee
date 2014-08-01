describe 'BlockCtrl', ->

  beforeEach(module('cth'))

  posts = [
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ],
    posted: "2014-6-17 20:23:12"
  ,
    title: "Goodbye Day"
    images: [
      url: "#/images/test1.jpg"
    ],
    posted: "2013-6-17 20:23:12",
    selected: true
  ]

  beforeEach ->
    inject ($injector) ->
      @controllerConstructor = $injector.get '$controller'
      @$state = $injector.get '$state'
      @$rootScope = $injector.get '$rootScope'

  describe 'posts property', ->
    describe 'object retrieval', ->
      beforeEach ->
        @$scope = @$rootScope.$new @$rootScope

        @BlockCtrl = @controllerConstructor 'BlockCtrl',
          $scope: @$scope
          content: posts
        @blocks = @BlockCtrl.blocks

      it 'is only defined after it calls the post service', ->
        expect(@blocks).toBeDefined()

      it 'is an Array', ->
        expect(@blocks.length).toBe(2)

  describe 'selecting and expanding posts', ->
    describe 'without url', ->
      beforeEach ->
        @$state.params.post_id = ""
        @$scope = @$rootScope.$new @$rootScope

        @BlockCtrl = @controllerConstructor 'BlockCtrl',
          $scope: @$scope
          content: posts
        @selectedBlocks = _.filter(@BlockCtrl.blocks, 'initial')

      it 'has the first posts marked as initial after retrieval', ->
        expect(@selectedBlocks.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedBlocks[0].title).toBe('Hello World')

      it 'is not expanded', ->
        expect(@selectedBlocks[0].expanded).toBe(undefined)

    describe 'with url', ->
      beforeEach ->
        @$state.params.post_id = "goodbye-day"
        @$scope = @$rootScope.$new @$rootScope

        @BlockCtrl = @controllerConstructor 'BlockCtrl',
          $scope: @$scope
          content: posts
        @selectedBlocks = _.filter(@BlockCtrl.blocks, 'selected')
        
      it 'has one selected posts if page corresponds', ->
        expect(@selectedBlocks.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedBlocks[0].title).toBe('Goodbye Day')

      it 'is expanded', ->
        expect(@selectedBlocks[0].expanded).toBe(true)

      describe 'when selection changes', ->
        beforeEach ->
          @$rootScope.$broadcast '$stateChangeSuccess', {},
            post_id: "hello-world"
          @selectedBlocks = _.filter(@BlockCtrl.blocks, 'selected')
          @expandedBlocks = _.filter(@BlockCtrl.blocks, 'expanded')

        it 'still has one selected post', ->
          expect(@selectedBlocks.length).toBe(1)

        it 'has the correct new title', ->
          expect(@selectedBlocks[0].title).toBe(posts[0].title)

        it 'leaves the other post expanded', ->
          expect(@expandedBlocks.length).toBe(2)
