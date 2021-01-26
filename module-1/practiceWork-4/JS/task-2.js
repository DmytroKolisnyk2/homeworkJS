'use strict';

const userAge = '55';
if (0 <= userAge && userAge <= 16) {
  alert('Максим дитина');
}else if(17 <= userAge && userAge <= 60) {
  alert('Максим дорослий');
}else if(61 <= userAge && userAge <= 100) {
  alert('Максим пенсіонер');
}