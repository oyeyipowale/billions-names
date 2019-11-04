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
      var randomItem = billions.random();
      expect(billions.all).to.include(randomItem);
    });

    it("should return an array of random items if passed a number", function() {
      var randomItems = billions.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(billions.all).to.include(item);
      });
    });
  });
});
