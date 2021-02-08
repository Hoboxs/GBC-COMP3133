var expect    = require("chai").expect;
var calc = require("../app/calculator");


describe("Noah - Lab Ex 2", () => {

    it("add(5, 2) expected result 7", () => {
        expect(calc.add(5, 2)).to.equal(7);
    });

    it("add(5, 2) expected result 8", () => {
      expect(calc.add(5, 2)).to.deep.equal(8);
    });    

    it("sub(5, 2) expected result 3", () => {
      expect(calc.sub(5, 2)).to.equal(3);  
    });
  
    it("sub(5, 2) expected result 5", () => {
      expect(calc.sub(5, 2)).to.equal(5);  
    });
  
    it("mul(5, 2) expected result 10", () => {
      expect(calc.mul(5, 2)).to.equal(10); 
    });
  
    it("mul(5, 2) expected result 12", () => {
      expect(calc.mul(5, 2)).to.equal(12);
    });
  
    it("div(10, 2) expected result 5", () => {
      expect(calc.div(10, 2)).to.equal(5); 
    });
  
    it("div(10, 2) expected result 2", () => {
      expect(calc.div(10, 2)).to.equal(2);  
    });
});