function calculateChiSquare(data) {
  var total = 0;
  var formatted = data.map((row) => {
    var o = row[0]; // Observed
    var e = row[1]; // Expected
    var o_e = o - e;
    var o_e_half = o_e - 0.5;
    var o_e_half_sq = o_e_half * o_e_half;
    var o_e_half_sq_div_e = o_e_half_sq / e;
    return {
      Cat: row[2], // Category
      O: o, // Observed
      E: e, // Expected
      "O-E": o_e,
      "(O-E)-1/2": o_e_half,
      "((O-E)-1/2)^2": o_e_half_sq,
      "(((O-E)-1/2)^2)/E": o_e_half_sq_div_e,
    };
  });
  console.table(formatted);
  for (var i = 0; i < data.length; i++) {
    var o = data[i][0];
    var e = data[i][1];
    var o_e_half = o - e - 0.5;
    var o_e_half_sq = o_e_half * o_e_half;
    total += o_e_half_sq / e;
  }
  return total;
}

var data = [
  [30, 25, "Male Red Eyes"],
  [28, 25, "Male White Eyes"],
  [21, 25, "Female Red Eyes"],
  [21, 25, "Female White Eyes"],
];

var total = calculateChiSquare(data);
console.log("\nTotal Chi-Square: " + total);