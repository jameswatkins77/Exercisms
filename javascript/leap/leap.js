
function Year(year) {
  this.year = year;
};

Year.prototype.isLeap = function(year) {
  if(this.year % 4 === 0 && this.year % 100 !== 0) {
    return true;
  } else if(this.year % 400 === 0) {
    return true;
  } else if (this.year % 100 === 0) {
    return false;
  } else {
    return false;
 }
};

console.log(2016 % 4 === 0);

module.exports = Year;
