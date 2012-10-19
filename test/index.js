
var romanize = require('../');

describe('romanize(num)', function(){
  it('should return a string equal to \'The lead character,\'', function(){
    romanize(14).should.eql('XIV');
  });

  it('should return a string equal to \'The lead character,\'', function(){
    romanize(532).should.eql('DXXXII');
  });
});
