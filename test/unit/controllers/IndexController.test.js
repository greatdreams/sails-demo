/**
 * Created by greatdreams on 8/21/15.
 */
var request = require('supertest');

describe('IndexController', function() {

  describe('#index()', function() {
    it('visit /profile should response 404', function (done) {
      request(sails.hooks.http.app)
        .get('/profile')
        .expect(404, done);
    });
  });
});
