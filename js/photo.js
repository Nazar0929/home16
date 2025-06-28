// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const textRef = document.querySelector(".text");
textRef.style.textAlign = "center"

const imageRef = document.querySelector(".image");
imageRef.src = "./img/light.jpg";
imageRef.style.width = "1000px";

imageRef.style.display = "block";
imageRef.style.margin = "0 auto";