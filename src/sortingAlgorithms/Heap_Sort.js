// Heap Sort
export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    heapSortHelper(auxiliaryArray, animations);
    return animations;
  }
  
  function heapSortHelper(mainArray, animations) {
    const n = mainArray.length;
    
    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(mainArray, n, i, animations);
    }
  
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      animations.push(["color", 0, i, 'red']);
      animations.push(["swap", 0, mainArray[i]]);
      animations.push(["swap", i, mainArray[0]]);
      animations.push(["color", 0, i, 'turquoise']);
  
      let temp = mainArray[0];
      mainArray[0] = mainArray[i];
      mainArray[i] = temp;
  
      // Call max heapify on the reduced heap
      heapify(mainArray, i, 0, animations);
    }
  }
  
  function heapify(mainArray, size, rootIdx, animations) {
    let largest = rootIdx;
    const left = 2 * rootIdx + 1;
    const right = 2 * rootIdx + 2;
  
    if (left < size && mainArray[left] > mainArray[largest]) {
      largest = left;
    }
  
    if (right < size && mainArray[right] > mainArray[largest]) {
      largest = right;
    }
  
    if (largest !== rootIdx) {
      animations.push(["color", rootIdx, largest, 'red']);
      animations.push(["swap", rootIdx, mainArray[largest]]);
      animations.push(["swap", largest, mainArray[rootIdx]]);
      animations.push(["color", rootIdx, largest, 'turquoise']);
  
      let swap = mainArray[rootIdx];
      mainArray[rootIdx] = mainArray[largest];
      mainArray[largest] = swap;
  
      heapify(mainArray, size, largest, animations);
    }
  }
  