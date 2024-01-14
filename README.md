### тестовое приложение <u>test-tophunter-ru</u>

## Т.З 

Сверстать 3 страницы с использованием библиотеки React. Использование хуков обязательно. Настроить роутинг между ними, подключить redux. В верстке использовать html5. Допустимо использование SASS. Дизайн страниц произвольный. Допустимо использование сторонних UI библиотек.

1.	Страница с товарами.
2.	Страница избранное.
3.	Страница корзина.

	На странице с товарами вывести список товаров (http://react.ohotaktiv.ru:5000/goods, требуется посредством API забрать эти товары) с кнопками «В корзину» и «В избранное». Если товар есть в корзине или в избранном, на карточке товара кнопки должны меняться на «В корзине» или «В избранном» и кнопки должны стать неактивными. Если товара нет в наличии, то показываем неактивную кнопку «Отсутствует». Если у товара нет картинки, поставить любую заглушку.

	Вся логика должна храниться в Redux.

	На странице с Избранным и с Корзиной должны быть товары, добавленные со страницы с товарами. Должны быть кнопки «Удалить из корзины» и «Удалить из избранного». Предусмотреть посещение страницы без добавленных товаров (Нет товаров в избранном, нет товаров в корзине).

## коментарии 

1. забрать список товаров с ресурса http://react.ohotaktiv.ru:5000/goods по средствам "fetch" запроса не удалось. (пришлось хардкодить)

>Access to fetch at 'http://react.ohotaktiv.ru:5000/goods' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

>GET http://react.ohotaktiv.ru:5000/goods net::ERR_FAILED 200 (OK)

*С HTTP (без S) это дело работать не будет. Без SSL сейчас практически ничего не работает.*

2. c Redux не работал ранее, в описании к вакансии этих требований к соискателю не выдвигалось. Готов выучить при положительном ответе.

