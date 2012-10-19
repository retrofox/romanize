/**
 * Slugize a string
 *
 * @param {String} str
 * @api public
 */

module.exports = function(num){
  if (!+num) return false;

  var digits = String(+num).split("");
  var key = [
    "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"
  ];
  var roman = "";
  var i = 3;

  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  }

  return Array(+digits.join("") + 1).join("M") + roman;
};
