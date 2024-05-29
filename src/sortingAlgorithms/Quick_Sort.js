// Quick Sort
export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
      const pivotIdx = partition(array, startIdx, endIdx, animations);
      quickSortHelper(array, startIdx, pivotIdx - 1, animations);
      quickSortHelper(array, pivotIdx + 1, endIdx, animations);
    }
  }
  
  function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      // Color change to indicate comparison (turn both bars to secondary color)
      animations.push([j, high, 'color', 'red']);
      animations.push([j, high, 'color', 'turquoise']);
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
        // Height change to indicate swap
        animations.push([i, array[i]]);
        animations.push([j, array[j]]);
      }
    }
    swap(array, i + 1, high);
    // Height change to indicate swap
    animations.push([i + 1, array[i + 1]]);
    animations.push([high, array[high]]);
    return i + 1;
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  