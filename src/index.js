module.exports = function check(str, bracketsConfig) {
  let openBracket = [];
  let closeBracket = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
      openBracket[i] = bracketsConfig[i][0];
      closeBracket[i] = bracketsConfig[i][1];
  };
  let arrayOfData = [];
  for (let i = 0; i < str.length; i++) {
      let bracket = str[i];
      let index = openBracket.indexOf(bracket);
      if (index >= 0) {
          if (index == arrayOfData[arrayOfData.length - 1] && closeBracket[index] == openBracket[index]) {
              arrayOfData.pop();
          } else {
              arrayOfData.push(index);
          }
      } else if (closeBracket.indexOf(bracket) == arrayOfData[arrayOfData.length - 1]) {
          arrayOfData.pop();
      } else {
          arrayOfData.push('!=');
      }
  }
  return arrayOfData.length ? false : true;
}
