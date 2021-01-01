const utils = require("../../utils");
const chai = require("chai");

/*

Fictitious unit tests demonstrate some of the assertion methods
available to our testing library for an imaginary util function
for checking pokemon evolution.

You can play around with the full list of available methods here:

https://www.chaijs.com/api/

*/
describe("Unit tests - util functions", () => {
  // Checks evolution function results
  describe("utils.evolve()", () => {
    // charmander test case
    it("Evolves charmander to charmeleon", (done) => {
      const charEvolved = utils.evolve("charmander");
      chai.assert.equal(charEvolved, "charmeleon");
      done();
    });

    // snorlax test case
    it("Confirms snorlax does not evolve", (done) => {
      const snorlaxEvolved = utils.evolve("snorlax");
      chai.assert.notEqual(snorlaxEvolved, "vaporeon");
      chai.assert.equal(snorlaxEvolved, "No evolution");
      done();
    });

    // eevee test case
    it("Confirms eevee evolves to a valid form", (done) => {
      const eeveeEvolved = utils.evolve("eevee");
      const validEvolutions = [
        "vaporeon",
        "flareon",
        "jolteon",
        "umbreon",
        "espeon",
        "glaceon",
        "leafeon",
        "sylveon",
      ];

      chai.expect(validEvolutions).to.include(eeveeEvolved);
      done();
    });
  });
});
