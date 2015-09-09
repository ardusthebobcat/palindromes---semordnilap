describe("palindromes", function () {
  it("checks a 1 digit and declares it a palindrome", function() {
    palindrome("aaa").should.equal(true)
  });

  it("checks a clearly-not palindrome and returns false", function() {
    palindrome("car").should.equal(false)
  });

  it("checks a palindrome of any length with letters", function(){
    palindrome("abcdefgfedcba").should.equal(true)
  });

  it("checks a palindrome of any length with numbers only", function() {
    palindrome("10010201001").should.equal(true)
  });
});
