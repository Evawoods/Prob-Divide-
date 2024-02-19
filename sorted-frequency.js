function sortedFrequency(arr, val) {
    // works with a sorted arr
    let first = findFirst(arr, val); //finding first occurance
    if (first == -1) return first;
    
    // finding last occurance
    let last = findLast(arr, val);
    return last - first + 1;
}

function findFirst(arr, val, low = 0, high = arr.length - 1){
    if (high >= low){
        let mid = Math.floor((low + high)/2);

        if ((mid === 0 || val > arr[mid - 1]) && arr[mid] === val){
            return mid;
        }
        else if (val > arr[mid]){
            return findFirst(arr, val, mid + 1, high);
        }
        else{
            return findFirst(arr, val, low, mid - 1);
        }
    }
    return -1
}

function findLast(arr, val, low = 0, high = arr.length -1){
    if (high >= low){
        let mid = Math.floor((low + high)/2);

        if ((mid === arr.length -1 || val < arr[mid + 1]) && arr[mid] === val){
            return mid;
        }
        else if (val < arr[mid]){
            return findLast(arr, val, low, mid - 1);
        }
        else{
            return findLast(arr, val, mid + 1, high);
        }
    }
    return -1
}

module.exports = sortedFrequency