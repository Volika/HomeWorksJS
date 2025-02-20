"use strict"
if (confirm('Почати тестування?')) {
/* 01                    
   Відобразити трикутник за допомогою символів «о» 
       O 
      O O  
     O O O  
    O O O O  
   O O O O O  

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
   for (let i = 1; i <= rowCount; i++) {
      let row = "" // Починаємо з порожнього рядка

      for (let j = 0; j < rowCount; j++) {
          if (j < rowCount - i) {
              row += "&nbsp;" // Додаємо пробіли
          } else {
              row += "о" // Додаємо "о"
          }
      }

      document.write(row + "<br>") // Виводимо рядок на екран
  }
}

   let rowCount = getRowCount()
   drawTriangle(rowCount)

}
