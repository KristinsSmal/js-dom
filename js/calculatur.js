document.querySelectorAll('.calculator .digits button') 
/* querySelectorAll - селектор,що шукає клас calculator, 
// digits - клас цифри
// .calculator .digits button - знайде всі кнопочки з цифрами */
    .forEach( button => button.addEventListener('click', digitPressed) );
/* ф-ція .forEach, з масиву document виконає ф-цію для кожного елемента: до кожної 
   кнопки приєднає одну і ту саму дію, що прописана у нас в  function digitPressed(ev),
   але щоб зрозуміти яку кнопку натиснули, браузер кожний раз їй (ф-ції) на вхід 
   (обробник digitPressed), посилає змінну - подію ev. Коли спрацює обробник подій,
   браузер сам присилає ev. 
   button.addEventListener на подію 'click' натисне кнопку (digitPressed), 
   яку я натиснув. тобто знайде всі кнопки в масиві document, тобто до всіх 
   кнопок з цифрами приєднана одна ф-ція - function digitPressed(ev)
*/
function digitPressed(ev) { 
    const btn = ev.target;
/* об'єкт знаходиться у полі target
   коли натиснути на кнопку - js(точніше браузер) викликає ф-цію, цій ф-ції він 
   передає спец.об'єкт - ev(подія), і цей об'єкт дозволяє вияснити на яку ф-цію 
   я натиснув, target - ціль */
    const display = document.querySelector('.display'); 
// дальше знаходить дисплей
// в html є посилання на <input type="text" class="display" placeholder="0" readonly> 
    display.value += btn.innerText; 
// до display.value додає текст кнопочки
}


document.querySelectorAll('.calculator .operators button')
    .forEach( button => button.addEventListener('click', operatorPressed) );
function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}
// так само,як для цифр і дисплея, прописуєм все для операторів (+, -) і дисплея

 
document.querySelector('.calculator .eq').addEventListener('click', eqPressed);
function eqPressed() {
    const display = document.querySelector('.display');
    display.value = eval(display.value); 
    // eval- виконує js-код ( якщо є 2+2,виконає =4)
}