function ubahHuruf(words, oldWord, newWord) {
  let char = words.split("");

  for (let i = 0; i < char.length; i++) {
    if (char[i] === oldWord) {
      char[i] = newWord;
    }
  }

  return char.join("");
}

console.log(ubahHuruf("sukiharji", "i", "o"));
// Output: sukoharjo
