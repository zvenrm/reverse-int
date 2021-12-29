module.exports = function reverse (n) {
    let str = n.toString().split('').reverse();
    let newNum = ''
    for (let i of str){
      if (isFinite(i)){
        newNum += i;
      }
    }
    return newNum.startsWith('0') ? +newNum.slice(1,) : +newNum;
}
