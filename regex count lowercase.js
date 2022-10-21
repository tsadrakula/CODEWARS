/*Your task is simply to count the total number of lowercase letters in a string.*/

function lowercaseCount(str){
  const result = str.match(/[a-z]/g);
 return result ? result.length:0;
}
