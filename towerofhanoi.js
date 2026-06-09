function towerOfHanoi(n,fromRoad,toRoad,usingRoad){
    if(n === 1){
        console.log(`Move Disk 1 from ${fromRoad} to ${toRoad}`)
        return
    }

    towerOfHanoi(n-1,fromRoad,usingRoad,toRoad)
    console.log(`Move Disk ${n} from ${fromRoad} to ${toRoad}`)
    towerOfHanoi(n-1,usingRoad,toRoad,fromRoad)
}

towerOfHanoi(3,"A","C","B")