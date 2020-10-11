// my sleep
function sleep(func, time) {
  return new Promise((res) => {
    setTimeout(() => res(func()), time);
  });
}

// winter sleep
function wSleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

// myPromise
function runPromise() {
  sleep(red, 1000)
    .then(() => sleep(yellow, 2000)) // 箭头函数省略return
    .then(() => sleep(green, 1000))
    .then(() => runPromise());
}

// winter Promise
function winPromise() {
  red();
  wSleep(1000)
    .then(() => {
      yellow();
      return wSleep(2000); // 注意加上return
    })
    .then(() => {
      green();
      return wSleep(1000);
    })
    .then(winPromise);
}

/**
 * Promise 是ES6提出的较为优雅的异步编程方案，本身是一个异步状态容器，
 * 共有pedding、resolved、rejected三种状态，只能由pedding可转换至resolved和rejected，
 * 状态一旦确定，就不能反转，并且Promise采用then提供链上调用的方法，then函数中传递两个参数分别处理
 * 上一个状态中resolved和rejected的状态的结果，对于异常，可在Promies中可采用then的第二个函数参数或
 * catch方法处理
 *
 * Promoise对象还提供了resolve、reject、catch、all、race、allsettled等静态方法
 *
 */
