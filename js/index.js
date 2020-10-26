const h1 = document.querySelector('h1'); //
h1.innerHTML += ' <i>DOM</i>';   // додали слово DOM в js - в html його нема
/* h1.style.color = 'red'; */  
// стилі (колір букв) задавати в css, а не в js
h1.classList.add('mark');  // 

setInterval(updateClock, 1000);
function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}
/* створили годинник html: <div class="clock"></div> і прописуєм тут -в js.
 setInterval - вбудована ф-ція в браузері,яка викликає ф-цію  updateClock
 з інтервалом 1000 млсек - 1-н раз на секунду вона буде викликати цю ф-цію.
 ф-ція updateClock знайде div з html (бо там є class="clock") і запише змінну
  в блок-контейнер clockContainer.
  Тоді, в змінній clockContainer поміняєм текст на поточний час toLocaleTimeString()
  */

const products = ["Tesla X", "Hummer H2", "Toyota LC200", 
 "Opel Grandland X"];  
    /* задаємо тут const для <div class="products"></div> - створюєм масив- 
      джерело інфо */

function displayProducts(products) {  
    // прописуємо деталі таблиці ф-ції. функція відображає масив, як таблицю з машинами
    const container = document.querySelector('.products'); // ячейки містять машини
    container.innerHTML = '';  // якщо кнопку натиснути,очищає екран ?яку
    for (const product of products) {
        container.innerHTML += '<p class="product">' + product + '</p>';
    } 
}
/* for - цикл,що повторно виводить на екран таблицю з машинами, 
   після натискання showProducts.
   Тобто 2 рази натиснем -дві таблиці ідентичні з'являться одна під одною */


/* displayProducts(products); */
// якщо забрати фразу displayProducts(products); -табличка з машинами зникне
// якщо залишити -весь час буде на екрані


const showProductsBtn = document.querySelector('.showProducts');
showProductsBtn.addEventListener('click', () => displayProducts(products));
/* прописуєм тут деталі для кнопки Show Products - в html вона задана в:
 <div class="products"></div> 
 <button class="showProducts">Show Products</button>  
 використовуєм стрілочну ф-цію  =>
 
 */ 


const addProductBtn = document.querySelector('.add-product');  
addProductBtn.addEventListener('click', addNewProduct);
function addNewProduct() {
    const newProduct = document.querySelector('.new-product').value;
    products.push(newProduct);
    displayProducts(products);
}
/* задаєм параметри const addProductBtn (для віконечка), де впишем новий продукт:
 можна вписати нову машину, клацнути  Add product і нова машина з'явиться в новій 
 ячейці знизу таблички
 якщо оновити сторінку список зникне і буде тільки віконечко + Add product і
 кнопка Show Products
 якщо знов вписани нову машину - покаже весь список + нова машина */





/* прописуєм тут деталі для кнопки Add product яка задана в:
 <input type="text" class="new-product">
 <button class="add-product">Add product</button> */


