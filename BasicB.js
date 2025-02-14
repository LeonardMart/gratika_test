function patternCount(text, pattern) {
  if (pattern.length === 0) return 0;

  let count = 0;
  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.substring(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}

console.log(patternCount("palindrom", "ind"));
console.log(patternCount("ababab", "aba"));
console.log(patternCount("abakadabra", "ab"));
console.log(patternCount("aaaaaa", "aa"));
console.log(patternCount("hello", ""));
console.log(patternCount("hell", "hello"));
