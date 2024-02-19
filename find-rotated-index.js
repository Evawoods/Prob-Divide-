function findRotatedIndex(arr, val) {
    // arr is rotated
    let left = 0;
    let right = arr.length - 1;

    if (right < left) return 0;
    if (right === left) return left;

    while (left < right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] > right){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    // pivot point has been found

    let pivot = left
    left = 0;
    right = arr.length - 1;

    if(val >= arr[pivot] && val <= arr[right]){
        left = pivot;
    }
    else{
        right = pivot;
    }

    while (left < right){
        let mid = Math.floor((left + right)/2);
        if (val === arr[mid]){
            return mid;
        }
        if (arr[mid] > val){
            right = mid -1;
        }
        else if(arr[mid] < num){
            left = mid + 1;
        }
    }
    return -1
}

module.exports = findRotatedIndex

// rotatedArr[3,4,1,2]