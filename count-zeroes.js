function countZeroes(arr) {
    // The array should have the 0s following the 1s
    let firstZero = findFirst(arr)
    if (firstZero === -1){
        return 0;
    }
}

// Code to sort through array to find first 0

function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low){
        let middle = low + Math.floor((high - low) / 2);
        if ((mid ==0 || arr[middle - 1] === 1 && arr[middle] === 0)) {
            return middle;
        }
        else if (arr[middle - 1] === 1){
            return findFirst(arr, middle + 1, high);
        }
        else{
            return findFirst(arr, low, middle -1);
        }
    }
    return -1;
}
module.exports = countZeroes