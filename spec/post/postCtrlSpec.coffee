describe 'PostCtrl', ->

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      Post = $injector.get 'Post'
      $q = $injector.get '$q'
      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'

      deferred = $q.defer()
      deferred.resolve [
        title: "Hello World"
      ,
        title: "Goodbye Day"
      ]

      spyOn(Post, 'getAll').andReturn(deferred.promise)
      @scope = @$rootScope.$new()
      @PostCtrl = $controller('PostCtrl', {$scope: @scope})

  describe 'post property', ->

    describe 'object retrieval', ->
      beforeEach ->
        inject ($injector) ->
          @$rootScope.$apply()
          @posts = @PostCtrl.posts

      it 'is only defined after it calls the post service', ->
        expect(@posts).toBeDefined

      it 'is an Array', ->
        expect(Array.isArray(@posts)).toBeTruthy()

      it 'contains objects with an id property that is the dasherized version of title', ->
        expect(@posts[0].id).toBe("hello-world")
        expect(@posts[1].id).toBe("goodbye-day")

    describe 'object selection', ->

      describe 'without route params', ->
        it 'has no post objects that are selected', ->
          @$rootScope.$apply()
          posts = @PostCtrl.posts
          selectedPosts = selectPosts(posts)
          expect(selectedPosts.length).toBe(0)

    describe 'with route params', ->
      beforeEach ->
        inject ($injector) ->
          $stateParams = $injector.get('$stateParams')
          $stateParams.post_id = "hello-world"

      it 'has one post objects that is selected', ->
        @$rootScope.$apply()
        posts = @PostCtrl.posts
        selectedPosts = selectPosts(posts)
        expect(selectedPosts.length).toBe(1)

selectPosts = (posts) ->
  _.filter posts, (post) ->
    post.selected == true