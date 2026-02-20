function inserseonShort(arr){
    for(let i = 1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1
        console.log('j', j)
        while(j>= 0 && arr[j] > numberToInsert){
            console.log('arr[j]', arr[j])
            arr[j+1] = arr[j]
            console.log('j+1 = arr[j]', j+1 , arr[j])
            j = j-1
            console.log('j-1,j', j-1,j)
        }
        arr[j+1] = numberToInsert
        console.log('arr[j+1],numberToInsert', arr[j+1],numberToInsert)
    }
}

const arr = [8,20,-2,4,-6]
inserseonShort(arr)
console.log('arr', arr)