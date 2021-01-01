const app = require("../../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

describe("Integration tests - /pokemon endpoint", () => {
  let pokemon;

  // Gets all results
  describe("GET /pokemon - all", () => {
    it("Returns array of pokemon", (done) => {
      chai
        .request(app)
        .get("/api/pokemon")
        .end((err, res) => {
          // confirms success status and properly formatted
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");

          // sets up values for following test
          pokemon = res;

          // exits
          done();
        });
    });
  });
});
