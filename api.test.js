'use strict';
var app = require('./server');

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('API endpoints', function () {
    var server;

    after(function () {
        process.exit()
    });

    describe('GET /', function () {
        it('should return a JSON response with status 200', function (done) {
            chai
                .request(app)
                .get('/')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.response).to.equal('This is GET method.');
                    done();
                });
        });
    });

    describe('GET /:id', function () {
        it('should return a JSON response with status 200 and the provided id', function (done) {
            var id = 123; // Cambia esto por el ID que desees probar

            chai
                .request(app)
                .get('/' + id)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.response).to.equal('This is GET method with id=' + id + '.');
                    done();
                });
        });
    });

    describe('POST /', function () {
        it('should return a JSON response with status 200', function (done) {
            chai
                .request(app)
                .post('/')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.response).to.equal('This is POST method.');
                    done();
                });
        });
    });

    describe('PUT /', function () {
        it('should return a JSON response with status 200', function (done) {
            chai
                .request(app)
                .put('/')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.response).to.equal('This is PUT method.');
                    done();
                });
        });
    });

    describe('DELETE /', function () {
        it('should return a JSON response with status 200', function (done) {
            chai
                .request(app)
                .delete('/')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.response).to.equal('This is DELETE method.');
                    done();
                });
        });
    });
});
