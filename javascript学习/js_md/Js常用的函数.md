数组常用方法Array() 

增：常用push() splice()

```js
//push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度
let arr = []; // 创建一个数组
let newarr = arr.push("red", "green"); // 推入两项
console.log(arr)// ['red', 'green']
console.log(newarr) // 2
```

```js
//unshift()在数组开头添加任意多个值，然后返回新的数组长度
const arr = new Array(); // 创建一个数组
const newarr = arr.unshift("red", "green"); // 从数组开头推入两项
console.log(arr)// ['red', 'green']
console.log(newarr)// 2
```

```js
//splice()传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组
let arr = ["red", "green", "blue"];
let removed = arr.splice(1, 0, "yellow", "orange")
console.log(colors) // red,yellow,orange,green,blue
console.log(removed) // []
```

```js
//concat()首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组
let arr = ["red", "green", "blue"];
let arr2 = arr.concat("yellow", ["black", "brown"]);
console.log(arr); // ["red", "green","blue"]
console.log(arr2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

删：常用pop() splice()

```js
pop()
方法用于删除数组的最后一项，同时减少数组的 length 值，返回被删除的项
let colors = ["red", "green"]
let item = colors.pop(); // 取得最后一项
console.log(item) // green
console.log(colors.length) // 1
```

```js
shift()
方法用于删除数组的第一项，同时减少数组的 length 值，返回被删除的项
let colors = ["red", "green"]
let item = colors.shift(); // 取得第一项
console.log(item) // red
console.log(colors.length) // 1
```

```js
slice()
用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原始数组
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors)   // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
```

```js
splice()
传入两个参数，分别是开始位置，删除元素的数量，返回包含删除元素的数组
let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，只有一个元素的数组
```

改

```js
splice()
//传入三个参数，分别是开始位置，要删除元素的数量，要插入的任意多个元素，返回删除元素的数组，对原数组产生影响
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
console.log(colors); // red,red,purple,blue
console.log(removed); // green，只有一个元素的数组
```

查：常用find()

```js
indexOf()//即查找元素，返回元素坐标或者元素值
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4) // 3
```

```js
includes()//返回要查找的元素在数组中的位置，找到返回true，否则false
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4) // true
```

```js
find()//返回第一个匹配的元素
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
```

数组排序

reverse()数组反转

```
reverse()//顾名思义，将数组元素方向反转
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
```

sort()

```js
sort()方法接受一个比较函数，用于判断哪个值应该排在前面
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
```

数组转换方法

join()

```js
join() 方法接收一个参数，即字符串分隔符，返回包含所有项的字符串
let colors = ["red", "green", "blue"];
alert(colors.join(",")); // red,green,blue
alert(colors.join("||")); // red||green||blue
```

数组迭代方法

some()

```js
some()对数组每一项都运行传入的函数，如果有一项函数返回 true ，则这个方法返回 true
对数组里的项进行比较，如果比其中一项大则返回true
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.every((item, index, array) => item > 2);//比较大小
console.log(someResult) // true
```

every()

```js
every()对数组每一项都运行传入的函数，如果对每一项函数都返回 true ，则这个方法返回 true
对每一项进行比较，如果都满足则为true，一项不符合则为false
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult) // false
```

forEach()

```js
forEach()对数组每一项都运行传入的函数，没有返回值
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.forEach((item, index, array) => {
    // 执行某些操作
});
```

filter()

```js
filter()对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
//返回大于2的项，为filterResult新数组，数组里存满足条件的值
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // 3,4,5,4,3
```

map()

```js
map()对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
//遍历每一项，将其乘以2，然后返回到mapResult新数组
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult) // 2,4,6,8,10,8,6,4,2
```

把对象转换为JSON字符串stringify()

```js
JSON.stringify(value[, replacer [, space]])
```

把字符串转换为对象parse()

```js
const str = 'woshinibaba,zhenweida'
JSON.parse(str)
```

call(this指向谁，参数1，参数2)函数使用

```js
const obj ={
uname:'pink'
}
function fn(x,y){
console.log(this)//window
console.log(x+y)
}
//调用参数
//改变this指向
fn.call(obj,1,2)//pink,3
```

apply(this指向谁，数组参数)

```js
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);
// Expected output: 7
const min = Math.min.apply(null, numbers);
console.log(min);
// Expected output: 2
```

Math.ceil()  静态方法总是向上舍入，并返回大于等于给定数字的最小整数。

```js
console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7
```

replace()

```js
replace(pattern, replacement)
//pattern可以是字符串或者一个带有 Symbol.replace 方法的对象
//replacement可以是字符串或函数
```

