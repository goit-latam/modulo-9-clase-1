// Crea una nueva fecha
// const date = new Date(2023, 3, 2, 12, 0, 0, 0);

// console.dir(date);

// console.log(date.getDate());

// date.setHours(25);

// console.log(date);

// Métodos de fecha

//? TASK 01
// Cree un objeto Fecha para la fecha: 9 de septiembre de 2022, 3 horas y 12 minutos.
// const date = new Date('2022-09-09 03:12:00');
// const date1 = new Date(2022, 8, 9, 3, 12, 0, 0);

// console.log(date);
// console.log(date1);

//? TASK 02
// Cree una función getWeekDay(fecha) que devuelva el día de la semana en forma abreviada:
// Lun, Mar, Mie, «Jue», «Vie», «Sab», «Dom».

// const getWeekDay = date => {
//   const daysArr = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

//   return daysArr[date.getDay()];
// };

// const date = new Date();

// console.log(getWeekDay(date));

//? TASK 03
// Cree una función getLastDayOfMonth(año, mes) que devuelva el último día del mes. A veces es el 30, 31 o incluso el 28/29 de febrero.
// Parámetros:
// año es un año de cuatro dígitos, por ejemplo, 2012.
// mes – mes de 0 a 11.
// Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (año bisiesto, febrero).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? TASK 04
// Cree una función getSecondsToTomorrow() que devuelva la cantidad de segundos hasta mañana.

// const getSecondsToTomorrow = () => {
//   const tomorrow = new Date(2023, 3, 4);

//   const diff = tomorrow - Date.now();

//   return diff / 1000;
// };

// console.log(getSecondsToTomorrow());
