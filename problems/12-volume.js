/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// const recVolume = (height) => {
//   let count = 0;
//   // let vol = height;
//   return (width) => {
//     count++;
//     if (count <= 2) {
//       height *= width;
//     }
//     return height;
//   };
// };

//? ALTERNATESOLTUION====================
const recVolume = (height) => {
  const dimensions = [height];
  const innerFunc = (num) => {
    if (dimensions.length < 3) {
      dimensions.push(num);
    }
    if (dimensions.length === 3) {
      return dimensions.reduce((acc, el) => (acc *= el));
    }
    return innerFunc;
  };
  return innerFunc;
};

// let rec = recVolume(10);
// rec(6);
console.log(recVolume(3)); //this should return 180
console.log(recVolume(7)); //this should still return 180
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
