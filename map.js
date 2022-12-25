let arr = [45,23,85]

let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})

console.log(a)