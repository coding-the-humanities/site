describe 'BlockCtrl', ->

  beforeEach(module('cth'))

  content = [
    id: "hello-world"
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ],
    posted: "2014-6-17 20:23:12"
    selected: true
  ,
    id: "goodbye-day"
    title: "Goodbye Day"
    images: [
      url: "#/images/test1.jpg"
    ],
    posted: "2013-6-17 20:23:12"
  ]

  beforeEach ->
    inject ($injector) ->
      @controllerConstructor = $injector.get '$controller'
      @$state = $injector.get '$state'
      @$rootScope = $injector.get '$rootScope'
      @$scope = @$rootScope.$new @$rootScope


  describe 'blocks property', ->
    beforeEach ->

      @BlockCtrl = @controllerConstructor 'BlockCtrl',
        $scope: @$scope
        content: content

      @blocks = @BlockCtrl.blocks

    it 'is an Array', ->
      expect(@blocks.length).toBe(2)

  describe 'selecting and expanding blocks', ->
    describe 'without url', ->
      beforeEach ->
        @$state.params.block_id = ""

        @BlockCtrl = @controllerConstructor 'BlockCtrl',
          $scope: @$scope
          content: content

        @$rootScope.$broadcast 'pageReady'

        @selectedBlocks = _.filter(@BlockCtrl.blocks, 'selected')
        @expandedBlocks = _.filter(@BlockCtrl.blocks, 'expanded')

      it 'has no block that is selected', ->
        expect(@selectedBlocks.length).toBe(0)

      it 'has no block that is expanded', ->
        expect(@expandedBlocks.length).toBe(0)

    describe 'with url', ->
      beforeEach ->
        @$state.params.block_id = "goodbye-day"

        @BlockCtrl = @controllerConstructor 'BlockCtrl',
          $scope: @$scope
          content: content

        @$rootScope.$broadcast 'pageReady'

        @selectedBlocks = _.filter(@BlockCtrl.blocks, 'selected')
        
      it 'has one selected blocks if page corresponds', ->
        expect(@selectedBlocks.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedBlocks[0].title).toBe('Goodbye Day')

      it 'is expanded', ->
        expect(@selectedBlocks[0].expanded).toBe(true)

      describe 'when selection changes', ->
        beforeEach ->
          @$rootScope.$broadcast '$stateChangeSuccess', {},
            block_id: "hello-world"

          @selectedBlocks = _.filter(@BlockCtrl.blocks, 'selected')
          @expandedBlocks = _.filter(@BlockCtrl.blocks, 'expanded')

        it 'still has one selected block', ->
          expect(@selectedBlocks.length).toBe(1)

        it 'has the correct new title', ->
          expect(@selectedBlocks[0].title).toBe('Hello World')

        it 'leaves the other block open', ->
          expect(@expandedBlocks.length).toBe(2)
