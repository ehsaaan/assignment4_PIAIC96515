var input = "The quick brown fox jumps over the lazy dog.";
input = input.toLocaleLowerCase();
var totalCount = (input.match(/the/g) || []).length;
document.getElementById(
  "result"
).innerText = `There are ${totalCount} occurrence(s) of word 'the'.`;
