// Your code here
export function pointsForWord(word) {
  let points = 0;

  for (const char of word) {
    // Case-insensitive vowel check using /i
    if (/[aeiou]/i.test(char)) {
      points += 1; // 1 point per vowel
    } else if (/[a-z]/i.test(char)) {
      points += 2; // 2 points per consonant
    }
  }

  return points;
}
