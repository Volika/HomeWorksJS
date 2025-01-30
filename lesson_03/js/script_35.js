"use strict"
// 5.	З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати

const categoryDriver = prompt(`Введіть літеру категорії водія (A, B, C):`).toUpperCase();

switch (categoryDriver) {
   case `A`:
      document.write(`Категорія ${categoryDriver} - Ви можете керувати мопедом, мотоциклом.`);
      break;
   case `B`:
      document.write(`Категорія ${categoryDriver} - Ви можете керувати легковим автомобілем.`);
      break;
   case `C`:
      document.write(`Категорія ${categoryDriver} - Ви можете керувати вантажним автомобілем.`);
      break;
   default:
      document.write(`${categoryDriver} - Некоректні дані. Необхідно ввести A, B або C.`);
}

