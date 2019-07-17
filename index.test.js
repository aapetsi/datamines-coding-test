const request = require("supertest");

const app = require("./index.js").app;

it("should return hello world response", done => {
  request(app)
    .get("/")
    .expect("hello world")
    .end(done);
});
