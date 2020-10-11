/**
 * generator与异步
 *
 * generator模拟async await
 *
 * async generator 与 for await of 配合
 *
 * for await (let v of conter())
 * 
  async function* asyncGenerator() {
    var i = 0;
    while (i < 3) {
      yield i++;
    }
  }
   (async function() {
     for await (num of asyncGenerator()) {
       console.log(num);
     }
   })();
 */

function wSleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

function* generator() {
  while (true) {
    red();
    yield wSleep(1000);
    yellow();
    yield wSleep(2000);
    green();
    yield wSleep(1000);
  }
}

function run(iterator) {
  const { value, done } = iterator.next();
  if (done) return;
  if (value instanceof Promise) {
    value.then(() => run(iterator));
  }
}

function co(generator) {
  // co框架讲yield看作await去执行
  return function () {
    return run(generator());
  };
}

const runGenerator = co(generator);
