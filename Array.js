/*
数组去重*/
let arr = [3, 5, 2, 2, 5, 5]
let unique = [...new Set(arr)]
console.log(unique) // [3, 5, 2]
