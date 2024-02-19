function findRotationCount(arr, low = 0, high = arr.length -1) {
    if(high < low) return 0;
    if(high === low) return low;

    let mid = Math.floor((low + high)/2);

    // check if mid is the minimum element
    if(arr[mid] < arr[mid - 1] && mid > low){
        return mid;
    }
     // check if (mid + 1) is the minimum 
    if (arr[mid] > arr[mid + 1] && mid < high){
        return mid + 1;
    }

    // Decided if we move to evaluate the right or left half
    if (arr[high] > arr[mid]){
        return findRotationCount(arr, low, mid - 1); //going to the right half
    }
    return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount