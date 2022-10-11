/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
    let arr1 = s.split('');
    let arr2 = s.split('');
    
    arr1.forEach((item, index, original) => {
      if (index % 2 === 0){
        original[index] = item.toUpperCase();
        
      }
    });
    arr2.forEach((item, index, original) => {
      if (index % 2 !== 0){
        original[index] = item.toUpperCase();
        
      }
    });
    return [arr1.join(''), arr2.join('')];
  }