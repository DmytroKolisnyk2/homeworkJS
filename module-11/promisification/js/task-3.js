const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      canProcess ? resolve({ id: transaction.id, time: delay }) : reject(transaction.id);
    }, delay);
  })
};

const logSuccess = (data) => {
  console.log('%c task-3', 'color: green; font-size: 14px')
  console.log(`Transaction ${data.id} processed in ${data.time}ms`);
};

const logError = id => {
  console.log('%c task-3', 'color: green; font-size: 14px')
  console.log(`%cError processing transaction ${id}. Please try again later.`,'color: red;');
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
