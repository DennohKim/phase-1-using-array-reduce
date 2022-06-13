const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const initialValue = 0;
// const sumWithInitial = batteryBatches.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// function reducer(previous, current, index, batteryBatches) {
//     const totalBatteries = previous + current;
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${batteryBatches}`);
//     return totalBatteries;
//   }
  
//   batteryBatches.reduce(reducer);
//   console.log(totalBatteries);


let totalBatteries = batteryBatches.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)

  console.log(totalBatteries);