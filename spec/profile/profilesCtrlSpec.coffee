describe 'ProfilesCtrl', ->

  beforeEach(module('cth'))

  Students = (number)->
    students = []
    _(number).times (n) ->
      students.push
        name: "student #{n}"
        image:
          url: "./images/image#{n}"
    students
    

  beforeEach ->
    inject ($injector) ->
      @controllerConstructor = $injector.get '$controller'

      @scope = {}
      
      @scope.people = new Students(12)

      @ProfilesCtrl = @controllerConstructor 'ProfilesCtrl',
        $scope: @scope

  describe 'slide sizes', ->
    beforeEach ->
      @galleries = @scope.galleries

    it "should be an array of 4 elements", ->
      expect(@galleries.length).toBe(4)

    describe "three slides", ->
      beforeEach ->
        @gallery = @galleries[0]

      it "has a class property of visible-xs-block", ->
        expect(@gallery.pageSize).toBe("xs")

      it "has a colSize propery of 4", ->
        expect(@gallery.colSize).toBe(4)

      it "has a profiles property with 4 elements", ->
        expect(@gallery.profiles.length).toBe(4)

    describe "twelve slides", ->
      beforeEach ->
        @gallery = @galleries[3]

      it "has a class property of visible-lg-block", ->
        expect(@gallery.pageSize).toBe("lg")

      it "has a colSize propery of 1", ->
        expect(@gallery.colSize).toBe(1)

      it "has a profiles property with 1 elements", ->
        expect(@gallery.profiles.length).toBe(1)
