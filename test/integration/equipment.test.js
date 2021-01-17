const app = require("../../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const ObjectId = require("mongodb").ObjectId;

chai.use(chaiHttp);

describe("Integration tests - /equipment endpoint", () => {
  describe("GET /equipment - all", () => {
    it("Returns an array of equipment", (done) => {
      chai
        .request(app)
        .get("/api/equipment")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
        });

      done();
    });
  });

  describe("GET /equipment - single", () => {
    it("Returns 404 for bad id", (done) => {
      chai
        .request(app)
        .get("/api/equipment/5ce384dba213bcdbf2527025")
        .end((err, res) => {
          expect(res).to.have.status(404);
        });

      done();
    });
  });

  describe("POST /equipment", () => {
    it("Returns 201 and the new object", (done) => {
      chai
        .request(app)
        .post("/api/equipment")
        .send({ name: "TEST", image: "TEST" })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
        });

      done();
    });
  });

  describe("DELETE /equipment/:id", () => {
    it("Returns 204 status on deleted resource", (done) => {
      let testId;

      chai
        .request(app)
        .get("/api/equipment")
        .then((res, err) => {
          testId = res.body.filter(i => i.name == "TEST")[0]._id

          // Probably a better way to do this than nesting but it isn't documented
          // so what the heck, this works for now
          chai
            .request(app)
            .delete(`/api/equipment/${testId}`)
            .end((err, res) => {
              expect(res).to.have.status(204);
            });
        })

        done();
    });
  });
});
