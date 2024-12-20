/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sanitazed = s
    .replace(/[^0-9a-z]/gi, "")
    .toLowerCase()
    .replace(" ", "");

  const reversed = sanitazed.split("").reverse().join("");
  const palindrome = sanitazed === reversed;
  
  return palindrome;
};
