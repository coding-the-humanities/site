// Generated by CoffeeScript 1.7.1
(function() {
  describe('Block Factory', function() {
    var block;
    beforeEach(module('cth'));
    block = {
      title: 'hello world',
      posted: '2014-01-01',
      images: [
        {
          url: 'images/test.jpg'
        }, {
          url: 'images/test2.jpg'
        }, {
          url: 'images/test3.jpg'
        }
      ],
      authors: ["one", "two"],
      tags: ["a", "b", "c"],
      content: "bla bla"
    };
    beforeEach(function() {
      return inject(function($injector) {
        var Block;
        Block = $injector.get('Block');
        return this.block = new Block(block);
      });
    });
    describe('Block', function() {
      it('has a title', function() {
        return expect(this.block.title).toBe('hello world');
      });
      it('has one or more authors', function() {
        return expect(this.block.authors.length).toBe(2);
      });
      it('has one or more tags', function() {
        return expect(this.block.tags.length).toBe(3);
      });
      it('has deep content', function() {
        return expect(this.block.content).toBe("bla bla");
      });
      it('has a posted date', function() {
        return expect(this.block.posted instanceof Date).toBe(true);
      });
      it('has an id', function() {
        return expect(this.block.id).toBe('hello-world');
      });
      it('has an header image', function() {
        return expect(this.block.headerImage.url).toBe('images/test.jpg');
      });
      it('has two side images', function() {
        return expect(this.block.sideImages.length).toBe(2);
      });
      it('has a default layout property', function() {
        return expect(this.block.layout).toBe('default');
      });
      return it('has a default order property', function() {
        return expect(this.block.order).toBe('n/a');
      });
    });
    return null;
  });

}).call(this);
