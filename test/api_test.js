var chai     = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect   = require('chai').expect;
var assert   = chai.assert;
var app      = 'http://localhost:' + (process.env.PORT || 3001);
var moment   = require('moment');

describe('Simple JSON API', function() {
  it('should send the local time', function () {
    var time = [];
    chai.request(app)
      .get('/time')
      .end( function (err, res) {
        expect(res).to.have.status(200);
        expect(req.params.name).to.be.a('object');
        expect('/time').to.equal(moment().format("YYYY-MM-DD HH:mm"));
      });
  });

  it('should greet someone', function () {
    chai.request(app)
      .get('/greet/:name')
      .end( function (err, res) {
        expect(res).to.have.status(200);
        expect(req.params.name).to.not.be.instanceof('number');
        expect(res.body).to.have.property('greet');
        expect(res.body.msg).to.eql('Greetings ' + req.params.name + '!');
      });
  });
});