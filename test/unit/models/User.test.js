/**
 * Created by greatdreams on 8/21/15.
 */
describe('User', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      User.find()
        .then(function(results) {
          // some tests
          done();
        })
        .catch(done);
    });
  });

});
