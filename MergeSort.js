function MergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
   return merge(MergeSort(leftArr),MergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sorterArr = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sorterArr.push(leftArr.shift())
        }else{
            sorterArr.push(rightArr.shift())
        }
    }
    return [...sorterArr,...leftArr,...rightArr]
}

const arr = [8,20,-2,4,-6]
console.log('merge(arr)', MergeSort(arr))


//Big 0 is  = O(nlog n)