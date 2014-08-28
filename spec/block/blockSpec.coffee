describe 'Block Factory', ->

  beforeEach(module('cth'))
  
  block =
    title: 'hello world'
    posted: '2014-01-01'
    images: [
      url: 'images/test.jpg'
    ,
      url: 'images/test2.jpg'
    ,
      url: 'images/test3.jpg'
    ]
    authors: [
      "one"
      "two"
    ]
    tags: [
      "a"
      "b"
      "c"
    ]
    content: "bla bla"
  
  beforeEach ->
    inject ($injector) ->
      Block = $injector.get 'Block'
      @block = new Block block

  describe 'Block', ->

    it 'has a title', ->
      expect(@block.title).toBe('hello world')

    it 'has one or more authors', ->
      expect(@block.authors.length).toBe(2)

    it 'has one or more tags', ->
      expect(@block.tags.length).toBe(3)

    it 'has deep content', ->
      expect(@block.content).toBe("bla bla")

    it 'has a posted date', ->
      expect(@block.posted instanceof Date).toBe(true)

    it 'has an id', ->
      expect(@block.id).toBe('hello-world')

    it 'has an header image', ->
      expect(@block.headerImage.url).toBe('images/test.jpg')

    it 'has two side images', ->
      expect(@block.sideImages.length).toBe(2)
      
    it 'has a default layout property', ->
      expect(@block.layout).toBe('default')

    it 'has a default order property', ->
      expect(@block.order).toBe('n/a')

    it 'has a default people property', ->
      expect(@block.people).toBe('n/a')

  null
