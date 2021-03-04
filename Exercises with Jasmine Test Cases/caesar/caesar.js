// My Solution

const caesar = function(word, num) {
  const wordSplit = word.split('');
  let position = [];
  const move = getCode(num);

  for (i = 0; i < wordSplit.length; i++) {

    if ((/[^a-zA-Z]/).test(wordSplit[i])) {
      position.push(String.fromCharCode(wordSplit[i].charCodeAt()));
    } else {
      let newCharCode = wordSplit[i].charCodeAt() + move;

      if (wordSplit[i] == wordSplit[i].toLowerCase()) {
          if (newCharCode > 122) {newCharCode -= 26}
          else if (newCharCode < 97) {newCharCode += 26}
      } else if (wordSplit[i] == wordSplit[i].toUpperCase()) {
          if (newCharCode > 90) {newCharCode -= 26}
          else if (newCharCode < 65) {newCharCode += 26}
      }

      position.push(String.fromCharCode(newCharCode));
    }

  }

  return position.join('');
}

function getCode(num) {
  return ((num % 26) +26) % 26;
}

module.exports = caesar

// Provided Solution

// const caesar = function(string, shift) {
//   return string
//     .split("")
//     .map(char => shiftChar(char, shift))
//     .join("");
// };

// const codeSet = code => (code < 97 ? 65 : 97);

// // this function is just a fancy way of doing % so that it works with negative numbers
// // see this link for details:
// // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
// const mod = (n, m) => (n % m + m) % m;

// const shiftChar = (char, shift) => {
//   const code = char.charCodeAt();

//   if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//     return String.fromCharCode(
//       mod(code + shift - codeSet(code), 26) + codeSet(code)
//     );
//   }
//   return char;
// };