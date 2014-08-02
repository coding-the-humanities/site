describe 'BlockItemCtrl', ->

  beforeEach(module('cth'))

  Post = ()->
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ]


  beforeEach ->
    inject ($injector) ->
      @controllerConstructor = $injector.get '$controller'
      @$state = $injector.get '$state'

      @scope = {}
      @scope.block = new Post

      @dasherize = spyOn(stringManipulators, 'dasherize').and.callThrough()
      @scrollToTop = spyOn(scroll, 'toTop')

      BlockItemCtrl = @controllerConstructor 'BlockItemCtrl',
        $scope: @scope
        $state: @$state 
        stringManipulators: stringManipulators

      @block = BlockItemCtrl.block

  describe 'block property', ->
     it 'has the correct id', ->
       expect(@dasherize).toHaveBeenCalledWith 'Hello World'
       expect(@block.id).not.toBe undefined

     it 'has the correct headerImage property', ->
       expect(@block.headerImage.url).toBe "#/images/test0.jpg"

    describe 'dynamic urls', ->
      describe 'one route', ->
        beforeEach ->
          @$state.current.name = 'posts'
          BlockItemCtrl = @controllerConstructor 'BlockItemCtrl',
            $scope: @scope
            $state: @$state 
            stringManipulators: stringManipulators

          @block = BlockItemCtrl.block

        it 'has the correct url property', ->
          expect(@block.url).toBe "/posts/hello-world"

      describe 'another route', ->
        beforeEach ->
          @$state.current.name = 'pilot'
          BlockItemCtrl = @controllerConstructor 'BlockItemCtrl',
            $scope: @scope
            $state: @$state
            stringManipulators: stringManipulators

          @block = BlockItemCtrl.block

        it 'has the correct url property', ->
          expect(@block.url).toBe "/pilot/hello-world"
  
  describe 'post expansion', ->
    it "toggles state", ->
      @scope.toggleExpanded()
      expect(@block.expanded).toBe(true)
      @scope.toggleExpanded()
      expect(@block.expanded).toBe(false)

  stringManipulators =
    dasherize: (string) ->
      return 'hello-world'

  scroll =
    toTop: (element) ->
