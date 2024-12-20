/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sanitazed = s.trim().replace(/\s+/g, " ").split(" ");

  return sanitazed[sanitazed.length - 1].length;
};
