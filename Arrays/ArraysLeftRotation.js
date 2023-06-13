function rotLeft(arr, rotations) {
  const n = arr.length;
  const rotatedArray = [];
  
  for (let i = 0; i < n; i++) {
    const newIndex = (i + rotations) % n;
    rotatedArray[i] = arr[newIndex];
  }
  
  return rotatedArray;
}

// Example usage
const array = [1, 2, 3, 4, 5];
const rotations = 2;

const rotatedArray = rotLeft(array, rotations);
console.log(rotatedArray);


/**
 * A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if left rotations are performed on array , then the array would become

. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array
of integers and a number, , perform

left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

    int a[n]: the array to rotate
    int d: the number of rotations

Returns

    int a'[n]: the rotated array

Input Format

The first line contains two space-separated integers
and , the size of and the number of left rotations.
The second line contains space-separated integers, each an .
 * 
 * 
 */