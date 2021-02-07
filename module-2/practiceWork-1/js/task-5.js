console.log('task-5');

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(Math.round((styles.length-1) / 2), 1, 'Класика');
const deletedElement = styles.splice(0, 1);
console.log(deletedElement);
styles.unshift('Реп', 'Реггі');
console.log(styles);