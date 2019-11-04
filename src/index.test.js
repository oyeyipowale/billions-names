/* eslint-disable no-undef */
let expect = require("chai").expect;
let billions = require("./index");

describe("billions-names", function() {
  describe("all", function() {
    it("should be an array of strings", function() {
      expect(billions.all).to.satisfy(isArrayOfString);
      function isArrayOfString(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain 'Bobby Axelrod'", function() {
      expect(billions.all).to.include("Bobby Axelrod");
    });
  });

  describe("random", function() {
    it("should return a random item from the billions.all", function() {
      let randomItem = billions.random();
      expect(billions.all).to.include(randomItem);
    });
  });
});
