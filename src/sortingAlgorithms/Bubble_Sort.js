// BubbleSort.js
export function getBubbleSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    bubbleSortHelper(auxiliaryArray, animations);
    return animations;
  }
  
  function bubbleSortHelper(auxiliaryArray, animations) {
    const n = auxiliaryArray.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        animations.push([j, j + 1]); // Comparing these two indices
        animations.push([j, j + 1]); // Revert their color
        if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
          animations.push([j, auxiliaryArray[j + 1]]); // Swap heights
          animations.push([j + 1, auxiliaryArray[j]]); // Swap heights
          const temp = auxiliaryArray[j];
          auxiliaryArray[j] = auxiliaryArray[j + 1];
          auxiliaryArray[j + 1] = temp;
        } else {
          animations.push([-1, -1]); // No swap, just dummy values to keep the pattern
          animations.push([-1, -1]); // No swap, just dummy values to keep the pattern
        }
      }
    }
  }
  
