function main() {
  let userWord = user();
  display(userWord);
}


function user() {
  let word = prompt("Enter a word: ");
  return word;
}
function display(word) {
  alert(word);
}



main();