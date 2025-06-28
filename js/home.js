// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.


const buttonRef = document.querySelector("#button");
const inputRef = document.querySelector("#input");

buttonRef.textContent = inputRef.value