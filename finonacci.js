function fibonnaci(n){
    if(n<2) return n
    const fib = [0,1]
for(let i =2;i<n;i++){
    fib[i] = fib[i-1] + fib[i-2]
}
return fib

}

console.log(fibonnaci(1))