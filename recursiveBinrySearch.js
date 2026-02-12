function RecursiveBinarySeaarch(arr,target){
    return search(arr,target,0,arr.length - 1)
}

function search(arr,target,leftindex,rightIndex){
    if(leftindex > rightIndex)
    {
        return -1
    }

    let middelIndex = Math.floor((leftindex+rightIndex)/2)

    if(target === arr[middelIndex]){
        return middelIndex
    }
    if(target < arr[middelIndex]){
        return search(arr,target,leftindex,middelIndex -1)
    }else{
        return search(arr,target,middelIndex+1,rightIndex)
    }

}


console.log(RecursiveBinarySeaarch([-5, 2, 4, 6, 10], 10))
console.log(RecursiveBinarySeaarch([-5, 2, 4, 6, 10], 6))
console.log(RecursiveBinarySeaarch([-5, 2, 4, 6, 10], 20))