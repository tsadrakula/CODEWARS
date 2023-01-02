/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/

const capitals = (word) => {
	let arr = [];
  const wordArr = word.split('')
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] === wordArr[i].toUpperCase() ? arr.push(i) : null;
  } return arr;
};