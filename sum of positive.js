/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/  

function positiveSum(arr) {
    return arr.reduce((previousValue, currentValue) => {
      if (currentValue < 0) {
        currentValue = 0;
      }
      return previousValue + currentValue;
    }, 0)
  }