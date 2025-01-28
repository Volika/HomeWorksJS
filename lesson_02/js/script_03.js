"use strict"

// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const productPrice = parseFloat(prompt('Введіть вартість одиниці товару', '0'));
const productNumber = parseFloat(prompt('Введіть кількість товару', '0'));

const priceAll = productPrice * productNumber;

const persenTax = 5;

const productsAllTax = priceAll * persenTax / 100;

document.write(`Вартість одиниці товару: ${productPrice.toFixed(2) } <br>
					кількість товару: ${productNumber.toFixed(2) } <br> <br>
               Pезультат розрахунків: <br> <br>
					Загальна вартість товару становить ${priceAll.toFixed(2)} грн. <br>
					ПДВ  ${persenTax}% від загальної вартості становить ${productsAllTax.toFixed(2)} грн.`
					);
