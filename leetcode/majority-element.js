/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = [];

  const uniq = [...new Set(nums)];

  const counter = uniq.map((number) => {
    let cont = 0;
    for (let i = 0; i < nums.length; i++) {
      if (number === nums[i]) {
        cont++;
      }
    }

    const obj = { number, cont };

    return obj;
  });
  majority = counter.sort(({ cont: a }, { cont: b }) => b - a)[0];

  return majority.number;
};