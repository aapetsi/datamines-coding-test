const request = require("supertest");
const expect = require("expect");
const app = require("../index").app;

describe("Get users", () => {
  describe("Should return 2 users", () => {
    it("should return 2 users (41, 25)", done => {
      request(app)
        .get("/questions/3/responses/1/responders")
        .expect(200)
        .expect(res => {
          expect(res.body.length).toBe(2);
        })
        .end(done);
    });
  });

  describe("Should return zero users", () => {
    it("should return no users []", done => {
      request(app)
        .get("/questions/3/responses/2/responders")
        .expect(200)
        .expect(res => {
          expect(res.body.length).toBe(0);
        })
        .end(done);
    });
  });

  describe("Should return one user", () => {
    it("should return one user", done => {
      request(app)
        .get("/questions/2/responses/2/responders")
        .expect(200)
        .expect(res => {
          expect(res.body.length).toBe(1);
        })
        .end(done);
    });
  });
});
