// 重载toLocaleString方法
Number.prototype.toLocaleString = function(fixedNum) {
  var num = this.valueOf(),
    re = /(-?\d+)(\d{3})/;

  if (!isNaN(fixedNum) && fixedNum >= 0) {
    num = num.toFixed(fixedNum);
  }

  num = (num + '').split('.');

  for (var i = 0, len = num.length; i < len; i++) {
    while(re.test(num[i])) { 
      num[i] = num[i].replace(re, "$1,$2"); 
    }
  }

  return num.join('.');
};
