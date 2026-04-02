function climbingStrcase(n){
    const numberOfWays = [1,2]

    for (let i = 2; i < n; i++) {
        numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2 ] 
        
    }

    return numberOfWays[n-1]
}

console.log(climbingStrcase(1))
console.log(climbingStrcase(2))
console.log(climbingStrcase(3))
console.log(climbingStrcase(4))
console.log(climbingStrcase(5))