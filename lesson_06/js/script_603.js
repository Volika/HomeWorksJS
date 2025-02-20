"use strict"
if (confirm('Почати тестування?')) {
/* 01                    
   Відобразити трикутник за допомогою символів «о» 
   O O O O O  
    O O O O  
     O O O  
      O O  
       O 

*/

// Функція отримує максимальну кількість рядків від користувача
function getRowCount() {
   let count
   while (true) {
      count = prompt("Введіть кількість рядків трикутника (1-10):", "7")
      count = parseInt(count)
      if (count >= 1 && count <= 10) {
         return count
      }
      alert("Будь ласка, введіть число від 1 до 10")
   }
}

// Функція малює трикутник
function drawTriangle(rowCount) {
   for (let i = 0; i < rowCount; i++) {
      let row = "" 

      for (let j = 0; j < rowCount; j++) {
            if (j < i) {
               row += "&nbsp;" 
            } else {
               row += "о" 
            }
      }

      document.write(row + "<br>") 
   }

}


   let rowCount = getRowCount()
   drawTriangle(rowCount)

}
