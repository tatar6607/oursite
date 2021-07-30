export function MatchExpression(str) {
  var rgularExp = {
    contains_alphaNumeric: /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/,
    containsNumber: /\d+/,
    containsAlphabet: /[a-zA-Z]/,

    onlyWhiteSpace: /^\s+$/,
    onlyLetters: /^[A-Za-z]+$/,
    onlyNumbers: /^[0-9]+$/,
    onlyMixOfAlphaNumeric: /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/,
  };

  var expMatch = {};
  expMatch.containsNumber = rgularExp.containsNumber.test(str);
  expMatch.containsAlphabet = rgularExp.containsAlphabet.test(str);
  expMatch.alphaNumeric = rgularExp.contains_alphaNumeric.test(str);

  expMatch.onlyWhiteSpace = rgularExp.onlyWhiteSpace.test(str);

  expMatch.onlyNumbers = rgularExp.onlyNumbers.test(str);
  expMatch.onlyLetters = rgularExp.onlyLetters.test(str);
  expMatch.mixOfAlphaNumeric = !rgularExp.onlyMixOfAlphaNumeric.test(str);

  return expMatch;
}
