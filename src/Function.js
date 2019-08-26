// 添加默认值
function f(x = "world", y, z = 0) {
  console.log(x)
  console.log(y)
}

// function解构参数
function f2({x, y = 5}) {
  console.log(x, y);
}

f2({}) // undefined 5
f2({x: 1}) // 1 5
f2({x: 1, y: 2}) // 1 2
// f2() // TypeError: Cannot read property 'x' of undefined

// 如果没有提供参数，函数foo的参数默认为一个空对象。
function f3({x, y = 5} = {}) {
  console.log(x, y);
}

f3() // undefined 5

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = {x: 0, y: 0}) {
  return [x, y];
}

// m1 默认参数[0,0] m2 没有参数 [undefined,undefined]

console.log([1, 2, 3].map(x => x * x))
