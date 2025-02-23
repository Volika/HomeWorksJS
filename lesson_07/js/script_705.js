"use strict"
if (confirm('Почати тестування?')) {

/* 05
Створити окремі функції, які переводять:
1	Сантиметри у дюйми;
2	Кілограми у фунти;
3	Кілометри у милі.
*/

// Функція отримує число від користувача
function getNumber(message) {
   return parseFloat(prompt(message, "0")) || 0
}

// Функція переводить сантиметри у дюйми (1 см = 0.393701 дюйма)
function convertCmToInches(cm) {
   return cm * 0.393701
}

// Функція переводить кілограми у фунти (1 кг = 2.20462 фунта)
function convertKgToPounds(kg) {
   return kg * 2.20462
}

// Функція переводить кілометри у милі (1 км = 0.621371 милі)
function convertKmToMiles(km) {
   return km * 0.621371
}

// Отримуємо значення від користувача
let cm = getNumber("Введіть довжину в сантиметрах:")
let kg = getNumber("Введіть вагу в кілограмах:")
let km = getNumber("Введіть відстань в кілометрах:")

// Виводимо початкові дані
document.write(`Введені дані:<br>`)
document.write(`Довжина: ${cm} см<br>`)
document.write(`Вага: ${kg} кг<br>`)
document.write(`Відстань: ${km} км<br><br>`)

// Виводимо результати конвертації
document.write(`Сантиметри у дюймах: ${convertCmToInches(cm).toFixed(2)}<br>`)
document.write(`Кілограми у фунтах: ${convertKgToPounds(kg).toFixed(2)}<br>`)
document.write(`Кілометри у милях: ${convertKmToMiles(km).toFixed(2)}<br>`)

}