
 // Меняем фон документа
document.querySelector(".changePush").onclick = function changeP () { //получаем кнопку и добавляем событие 
	document.body.style.background = (document.querySelector('.color-input').value) //применяем выбранное значение цвета - фону документа
};

 // Очищаем фон документа
document.querySelector(".cleanPush").onclick = function cleanP() { //получаем кнопку и добавляем событие 
	document.body.style.background = ("none") //очищаем фон
};