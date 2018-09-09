var isDone = false;
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const char_list = {}
    for(let char of str) {
        if(!char_list[char]) {
            char_list[char] = 1;
        } else {
            char_list[char]++;
        }
    }
    for(let char of char_list) {
        return Math.max(char_list[char]);
    }
}

module.exports = maxChar;
