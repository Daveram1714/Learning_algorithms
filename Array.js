function Array() {
    const arr = [1, 2, 3, 4, 5, 6]
    console.log("log", arr)
    console.log(arr[0]);

    console.log("Bool", arr.includes(9));

    arr.unshift(0)
    arr.pop(6)

    console.log("log", arr)


}

function LeanerarSearch(arr, targer) {
    for (i = 0; i <= arr.length; i++) {
        if (targer === arr[i]) {
            console.log(arr[i]);
            return arr[i]

        }
        else return console.log("The value is not found in the array");
    }
}

// LeanerarSearch([1, 2, 3, 4, 5, 6], 9)

function BinaryTree(arr,targer){
    let left = 0 , right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor(left + right / 2)
        if(arr[mid] == targer) return console.log("mid",arr[mid]);
        else if (arr[mid] < targer) left = mid+1
        else right = mid -1
  }
}

console.log(BinaryTree([1, 2, 3, 4, 5, 6],1));
