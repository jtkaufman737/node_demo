const app = require("../../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const ObjectId = require("mongodb").ObjectId;

chai.use(chaiHttp);

describe("Integration tests - /pokemon endpoint", () => {
  describe("GET /pokemon - all", () => {
    it("Returns array of pokemon", (done) => {
      chai
        .request(app)
        .get("/api/pokemon")
        .end((err, res) => {
          // confirms success status and properly formatted
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
        });

      done();
    });
  });

  describe("GET /pokemon/:id", () => {
    it("Returns a 404 for bad id", (done) => {
      chai
        .request(app)
        .get("/api/pokemon/5ce384dba213bcdbf2527025")
        .end((err, res) => {
          expect(res).to.have.status(404);
        });

      done();
    });
  });

  describe("POST /pokemon", () => {
    it("Creates a new test entry", (done) => {
      chai
        .request(app)
        .post("/api/pokemon")
        .send({ name: "TEST", image: "TEST" })
        .end((err, res) => {
          expect(res).to.have.status(201);
        });

      done();
    });
  });
});
