function findFloor(arr, low = 0, high = arr.length - 1, val) {
    if (low > high) return -1; //if high & low cross
    if (val >= arr[high]) return arr[high]; //if last element is smaller than val

    let mid = Math.floor((low + high)/ 2);

    if (arr[mid] === val) return arr[mid]; // mid is floor

    if (mid > 0 && arr[mid - 1] <= val && val < arr[mid]){
        return arr[mid - 1]; // val lies between (mid - 1) and mid
    }

    if (val < arr[mid]){
        return findFloor(arr, low, mid - 1, val); //val is small than mid, go to left half
    }

    return findFloor(arr, mid + 1, high, val); //(mid - 1) is not floor & val is graater than arr[mid]
}

module.exports = findFloor