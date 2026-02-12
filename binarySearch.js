function Binarysearch(arr, target) {

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let middle =  Math.floor((left + right) / 2)
        if (target === arr[middle]) {
            return middle
        }
         if (target < arr[middle]) {
             right = middle - 1
        }
        else {
             left = middle + 1
        }
    }
 return -1

}


console.log(Binarysearch([-5, 2, 4, 6, 10], 10))
console.log(Binarysearch([-5, 2, 4, 6, 10], 6))
console.log(Binarysearch([-5, 2, 4, 6, 10], 20))