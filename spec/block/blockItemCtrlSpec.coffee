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

      @scope = {}
      @scope.block = new Post

      @dasherize = spyOn(stringManipulators, 'dasherize').and.callThrough()
      @scrollToTop = spyOn(scroll, 'toTop')

      BlockItemCtrl = @controllerConstructor 'BlockItemCtrl',
        $scope: @scope
        $element: {}
        stringManipulators: stringManipulators
        scroll: scroll

      @block = BlockItemCtrl.block

  describe 'post property', ->
     it 'has the correct id', ->
       expect(@dasherize).toHaveBeenCalledWith 'Hello World'
       expect(@block.id).not.toBe undefined

     it 'has the correct headerImage property', ->
       expect(@block.headerImage.url).toBe "#/images/test0.jpg"
  
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
