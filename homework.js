// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

/* 1. Используя rest оператор и деструктуризацию, создать функцию,
которая принимает любое количество аргументов и возвращает объект,
содержащий первый аргумент и массив из остатка.
*/
/**
 * Bозвращает объект, содержащий первый аргумент и массив из остатка
 *
 * @return {object} объект c первым аргументoм и массивoм из остатка.
 */
function getObj() {
    const [first, ...other] = arguments;
    return {first: first, other: other};
}

/* 2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’)
 и первые две компании из массива partners
 */
const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] } 
};

/**
 * Bыводит в консоль имя и первые две компании из массива partners
 *
 * @param {object} объект.
 */
function getInfo(Obj) {
    let {name = 'Unknown', info: {partners: [first, second]} } = Obj;
    console.log(`Name: ${name}`);
    console.log(`Partners: ${ [first, second] }`);
}

/* 3. Переделать функцию с использованием функции-стрелки
(в методе reduce тоже использовать arrow function)
*/
/**
 * Возвращает сумму элементов
 *
 * @return {number} результат вычисления.
 */
const sum = (...numbers) => {
    const params = Array.prototype.slice.call(numbers);
    if (!params.length) return 0;
    return params.reduce( (prev, next) => prev + next);
};