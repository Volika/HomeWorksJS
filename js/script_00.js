"use strict"

/* 
a - перше число
b - друге число
c - третє число

S1 = a + 12 + b
s2 = Math.sqrt((a+b)/2a)
s3 = Math.cbrt((a+b)c)
s4 = Math.sin(a/-b)
*/


const a = parseFloat(prompt('Введіть перше число', '1'));
const b = parseFloat(prompt('Введіть друге число', '1'));
const c = parseFloat(prompt('Введіть третє число', '1'));

const s1 = a + 12 + b;
const s2 = Math.sqrt((a + b) / (2 * a));
const s3 = Math.cbrt((a + b)*c)
const s4 = Math.sin(a / -b)

console.log(`S<sub>1</sub> = ${s1.toFixed(2)} \n
					S<sub>2</sub> = ${s2.toFixed(2) } \n
					S<sub>3</sub> = ${s3.toFixed(2) } \n
					S<sub>4</sub> = ${s4.toFixed(2) } radians`)

document.write(`a = ${a.toFixed(2) } <br>
					 b = ${b.toFixed(2) } <br>
					 c = ${c.toFixed(2) } <br> <br> <br>`
					);
document.write(`S<sub>1</sub> = ${s1.toFixed(2)} <br>
					S<sub>2</sub> = ${s2.toFixed(2) } <br>
					S<sub>3</sub> = ${s3.toFixed(2) } <br>
					S<sub>4</sub> = ${s4.toFixed(2) } radians`
					);




