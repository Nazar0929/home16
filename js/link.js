// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.



const linkRef = document.querySelector(".link");

linkRef.href = "https://www.instagram.com/";

const imgRef = document.querySelector(".image");

imgRef.style.width = "1000px"
imgRef.alt = "свіжий ліс у наших мріях да";
console.log(imgRef);
