/* 1) создать функцию которая принимает массив и возвращает строку ([1, 2, 3, 4, 5, 6] -> "123456")  */
/*function arToStr(arr) {
    let str = '';
    for (const i of arr) {
        str += i;
    }
    return str;
}
let str = arToStr([1, 2, 3, 4, 5, 6]);
console.log(str); */

/* 2) создать функцию которая принимает массив чисел и возвращает этот же массив, но каждый его элемент больше на 1 ([5,2,3] -> [6,3,4]) */
/*function arPlusOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
    return arr
}
let arr = arPlusOne([5,2,3]);
console.log(arr); */

/* 3) создать функцию которая принимает число n, min, max и возвращает массив длиной n с случайными числами в диапазоне от min до max */
/*function nArr(n, min, max) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
let arr = nArr(5, 1, 10);
console.log(arr); */

/* 4) создать функцию которая принимает age и массив  (массив ниже или придумайте свой) и возвращает новый массив с теми юзерами которые совпадают по возрасту
const users = [
{id: 1, name: 'vasya', age: 31, status: false},
{id: 2, name: 'petya', age: 30, status: true},
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 30, status: false},
{id: 4, name: 'kira', age: 29, status: false},
{id: 4, name: 'marta', age: 30, status: false},
];
Пример:
someFunc(30, users) -> [
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 4, name: 'olya', age: 30, status: false},
    {id: 4, name: 'marta', age: 30, status: false},
] */
/*const users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 30, status: false},
    {id: 4, name: 'kira', age: 29, status: false},
    {id: 4, name: 'marta', age: 30, status: false},
];
function userAge(age, user) {
    let arr = [];
    for (const user of users) {
        if(user.age === age) {
            arr.push(user);
        }
    }
    return arr;
}
let arr = userAge(29, users);
console.log(arr); */