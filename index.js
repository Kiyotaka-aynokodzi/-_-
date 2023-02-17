// // let obj = {
// //     name: "John",
// // } 

// // function isEmpty(obj) {
// //     for (let key in obj) {
// //     return false 
// //    }
// //     return true
// // }

// describe('Возводит x в степень n', funcion () {
//     it("5 в степени 1 будет 5", function() {
//         assert.equal(pow(5, 1), 5);
//     });

//     it("5 в степени 2 будет 25", function () {
//         assert.equal(pow(5, 2), 25);
//     });

//     it("5 в степени 3 будет 125", function () {
//         assert.equal(pow(5, 3), 125);
//     });
// });

// function multiplyNumeric(obj) {
//     for (let key in  obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }    
//     }
// }
// alert(phrases[Math.floor(Math.random() * 4)])



// function orbOfFate() {
//     let result = prompt("Введите вопрос или историю", '')
    
//     const phrases = ["Звучит неплохо", "Да", "Нет", "Не сегодня"]
//     if (result === '') {
//       alert('Напиши хоть слово')
//     } else if (result === null) {
//       alert('Не тупи')
//   }
// }
//   orbOfFate()
// const result = alert.prompt('Задай вопрос мне', 0)
// const phrases = [
//     "Звучит неплохо",
//     "Да",
//     "Нет",
//     "Не сегодня"
//   ];
  
// alert(phrases[Math.floor(Math.random() * 4)])
 const phrases = ["Звучит неплохо", "Да", "Нет", "Не сегодня", "Может быть", "Друг"];
 const result = ('Задай вопрос мне')
 if (result) {
    alert(phrases[Math.floor(Math.random() * 5)])
 } else if (result === '' || result === null) {
    alert('Не тормози воин')
} 
  
  
