let str = "the quick brown fox jumps over the lazy dog the fox";
let wordAppearances = {};

for (let i = 0; i < str.length; i++) {
    let word = str[i];

    if (wordAppearances[word]) {
        wordAppearances[word]++;
    } else {
        wordAppearances[word] = 1;
    }
}