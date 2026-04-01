//lab25
// console.log("Async|Await");

// async function greet() {
//     return "Привет";
// }

// greet().then((message) => console.log(message));


// function getWeather(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({temp : 22, condition : "Солнечно"});
//         }, 1000);
//     });
// }

// async function showWeather() {
//     console.log("Загрузка погоды..");
//     const weather = await getWeather();
//     console.log(`Температура ${weather.temp} , ${weather.condition}`);
// }

// showWeather();



// async function fetchData(shouleFail) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             if (shouleFail){
//                 reject("Ошибка при загрузке данных");
//             }else{
//                 reslove({data : "Важные данные"});
//             }
//         }, 800);
//     });
// }


// async function getData() {
//     try{
//         const resuit = await fetchData(false);
//         console.log("Успешно", resuit.data);

//         const failedResuit = await fetchData(true);
//         console.log("это не выполняетмя");
//     }catch (error){
//         console.log("Поймана ошибка", error);
//     }
// }
// getData();




// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);

//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);

//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);
    
//     return "Ужин готов";
// }


// function delay(ms){
//     return new Promise((reslove) => {
//         setTimeout(() => {
//             reslove(`Прошло ${ms} миллисекунд`);
//         }, ms );
//     });
// }

// cookDinner().then((resuit) => console.log(resuit));

// async function cookDinnerFast() {
//     console.log("Готвим все одноаремнно...");

//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then (() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салаь готов"),
//     ]);

//     console.log(pasta,sauce,salad);
//     return "Ужин готов быстрее";
// }

// cookDinnerFast().then((resuit) => console.log(resuit));



// function checkInventory(product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const i = {
//                 'ноутбук': true,
//                 'телефон': true,
//                 'планшет': false,
//             };
//             if (i[product] === true) {
//                 resolve(`Товар "${product}" есть в наличии!`);
//             } else if (i[product] === false) {
//                 reject(`Товара "${product}" нет в наличии!`);
//             } else {
//                 reject(`Товар "${product}" не найден в системе!`);
//             }
//         }, 1000);
//     });
// }

// function calculateCost(product, quantity) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const prices = {
//                 'ноутбук': 50000,
//                 'телефон': 30000,
//                 'планшет': 20000,
//             };
//         }, 800);
//     });
// }

// async function processOrder(product, quantity) {
//     try {
//         console.log(`\n=== Обработка заказа: ${product} x ${quantity} шт. ===`);
        
//         console.log('Подготовка к обработке заказа...');
//         const delayMess = await delay(500);
//         console.log(`${delayMess}`);
        
//         console.log('1. Проверяем наличие товара...');
//         const inventoryResult = await checkInventory(product);
//         console.log(` ${inventoryResult}`);
        
//         await delay(300);
//         console.log('   Продолжаем оформление...');
        
//         console.log('2. Рассчитываем стоимость...');
//         const costResult = await calculateCost(product, quantity);
//         console.log(`${costResult.message} (${costResult.price} руб. × ${quantity} шт.)`);
        
//         await delay(400);
        
//         console.log(` Заказ успешно оформлен! ID: ${orderResult.orderId}`);
//         return orderResult;
        
//     } catch (error) {
//         console.error(`Ошибка: ${error}`);
//         throw error;
//     }
// }




// console.log("Fetch Api");
// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok){
//             throw new Error(`HTTP ошибка статус${response.status}` );
//         }
//         const users = await response.json();

//         console.log("первые три пользователя");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     }catch(error){
//         console.log("Ошибка при загрузке ", error.message);
//     }
// }

// getUsers();



// async function getUserById(id) {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();

//         console.log(`Пользователь #${id}`);
//         console.log(`Имя ${user.name}`);
//         console.log(`Город ${user.address.city}`);
//         console.log(`Компании ${user.company.name}`);

//     }catch(error){
//         console.log("Ошибка", error.message);
//     }
    
// }

// getUserById(1);




// async function createPost() {
//   try {
//     const newPost = {
//       title: "Моя первая запись",
//       body: "Это содержание моей первой записи в блоге",
//       userId: 1,
//     };
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json", 
//       },
//       body: JSON.stringify(newPost), 
//     });
    
//     const createdPost = await response.json();
//     console.log("Создана новая запись:");
//     console.log(`ID: ${createdPost.id}`);
//     console.log(createdPost.title); 
//   } catch (error) {
//     console.log("Ошибка при создании записи:", error.message);
//   }
// }

// createPost();





































































//lab24


// console.log("\n===Деструктуризация массивов===");
// const colors = ["red", "green", "blue"];

// const { use } = require("react");

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1,color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary , , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);


// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city : "Москва",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName,userAge);


// const {name,age,city} = user;
// console.log(name,age,city);

// const {name: fullName, age : years} = user;
// console.log(fullName, years);

// const {name: personName , country = "Россия"} = user;
// console.log(personName,country);




// console.log("Деструктуриазация в параметрах ");
// const user = {
//     name: "Алиса",
//     age : 25 ,
//     city :"Москва",
// };

// function printUserOld (user) {
//     console.log(`имя ${user.name}`);
//     console.log(`Возраст ${user.age}`);
//     console.log(`Город ${user.city}`);
// }

// function printUser ({name, age, city}) {
//     console.log(`имя ${user.name}`);
//     console.log(`Возраст ${user.age}`);
//     console.log(`Город ${user.city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);


// const product = {
//     name: "Молоко",
//     price : 25 ,
//     category :"Молочные продукты",
// };

// console.log("Деструктуризация объектов");
// const {name,price,category} = user;
// console.log(name,price,category);

// function printProduct(product){
//     console.log(`Продукт ${product.name}`);
//     console.log(`Цена ${product.price}`);
//     console.log(`Категория ${product.category}`);
// }



// console.log("Spread для массивов");
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const combiend = [...arr1, ...arr2];
// console.log("Объединенный массив" , combiend);

// const copy = [...arr1];
// console.log("Копия массива", copy);

// const extended = [0, ...arr1, 7,8];
// console.log("Расширенный массив" , extended);


// console.log("Speead для объектов");
// const person = {
//     name: "Иван",
//     age: 30,
// };

// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };

// const fullInfo = {...person, ...address};
// console.log("Полная ифнормация", fullInfo);


// const personCopy = {...person};
// console.log("Копия объекта", personCopy);

// const updated = {...person, age : 31, occupation : "Developer"};
// console.log("Обновленный объект" , updated);



// console.log("Rest oператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num,0);
// }

// console.log("Сумма 1,2,3", sum(1,2,3));
// console.log("Сумма 1,2,3,4,5", sum(1,2,3,4,5));

// const numbers = [10,20,30,40,50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число", first);
// console.log("Второе число", second);
// console.log("Остальные  числа", rest);


// import {greet, add, PI} from "./utils.js";
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5+3=", add(5,3));
// console.log("Значения пи ", PI);


// import { multiply as умножить }  from "./utils.js";
// console.log("4 8 7 = ",умножить(4,7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение" , Utils.multiply(3,9));




// console.log("Промисы");
// const simplePromise = new Promise((resolove,reject) => {
//     const success = true;
//     if(success) {
//         resolove("Операция выполнена успешна");
//     }else{
//         reject("Произошла ошибка");
//     }
// });

// simplePromise
//     .then((result) => console.log("Результат", result))
//     .catch((error) => console.log("Ошибка", error));

// function delay(ms) {
//     return new Promise((resolove) => {
//         setTimeout(() => {
//             resolove(`Прошло ${ms} миллисекунд`);
//         }, ms);
//     });
// }

// delay(1000)
//     .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolove,reject) =>{
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolove({
//                     id : userId,
//                     name: "Иван Иванов",
//                     email : "ivan@gmail.com",
//                 });
//             }else{
//                 reject("Невернвй айди");
//             }
//         }, 1500);
//     });
// }

// fetchUserData(1)
//     .then((user) => console.log("Пользователь", user))
//     .catch((error) => console.log("Ошибка" , error));

// function step1(){
//     return new Promise((resolove) => {
//         setTimeout(() => resolove("Шаг 1 завершен"), 500); 
//     });
// }

// function step2 (previousResuit) {
//     return new Promise((resolove) => {
//         setTimeout(() => resolove(`${previousResuit} -> шаг 2завершен`),500);
//     });
// }

// function step3(previousResult){
//     return new Promise((resolove) => {
//         setTimeout(() => resolove(`${previousResult} => шаг 3 завершен`), 500);
//     });
// }

// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResuit) => console.log("ФИНАЛ" , finalResuit))
//     .catch((error) => console.log("Ошибка в цепочке", error));
    



// function checkInventory(product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const inventory = {
//                 'ноутбук': true,
//                 'телефон': true,
//                 'планшет': false,
//             };
//             if (inventory[product] === true) {
//                 resolve(`Товар "${product}" есть в наличии!`);
//             } else if (inventory[product] === false) {
//                 reject(`Товара "${product}" нет в наличии!`);
//             } else {
//                 reject(`Товар "${product}" не найден в системе!`);
//             }
//         }, 1000);
//     });
// }

// console.log('Проверка наличия товаров...');

// checkInventory('ноутбук')
//     .then(message => {
//         console.log('Успех:', message);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });

// checkInventory('планшет')
//     .then(message => {
//         console.log('Успех:', message);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });

// checkInventory('телефон')
//     .then(message => {
//         console.log('Успех:', message);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });