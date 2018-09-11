/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var a = 0;
  var b = preferences.length;
  for (i=0; i<b; i++) {
    var c1 = preferences[i];
    var c2 = preferences[c1 - 1];
    if (preferences[c2 - 1] === i + 1) {
      a = a + 1;
    }
  }
  return Math.floor(a/3);
};
