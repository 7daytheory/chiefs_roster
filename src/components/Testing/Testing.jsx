function Testing() {
  var numbers = [3, 4, 21, 7, 19];

  function double(x) {
    return x * 2;

    //ForEach solution
    //newArray.push(x * 2);
  }

  const newNumbers = numbers.map(double);

  console.log(newNumbers);

  //forEach Solution of this
  // const newArray = [];
  //
  // numbers.forEach(double);
  //
  // console.log(newArray);


  //**************** Filter - Create an array by keeping the items that return true
  const highArray = numbers.filter(function(num) {
    return num > 10;
  })

  console.log(highArray);

  //*************** Reduce - Accumulating a value by doing something to each item in the array

  var newNumber = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
  })

  console.log(newNumber);

  //forEach Solution
  // let newNumber = 0;
  //
  // numbers.forEach((currentNumber) => {
  //     newNumber += currentNumber;
  // })
  //
  // console.log(newNumber);

  //******************** Find - find the first item that matches from an array

  var findNum = numbers.find((num) => {
    return num > 10;
  })

  console.log(findNum);

  //**************** FindIndex - Find the index of the first item that matches the specified params
  var findIndex = numbers.findIndex((num) => {
    return num > 10;
  })

  console.log(findIndex);

}

export default Testing;
