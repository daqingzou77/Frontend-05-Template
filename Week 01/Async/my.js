/**
 * 绿灯1s 黄灯2s 红灯1s 顺序，无限循环----我的方法
 */

const log = console.log;

// callback
function go() {
  setTimeout(() => {
    log("绿灯");
    setTimeout(() => {
      log("黄灯");
      setTimeout(() => {
        log("红灯");
        go();
      }, 1000);
    }, 2000);
  }, 1000);
}
go();

// promise写法
function wrapper(color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log(color);
      resolve(color);
    }, time);
  });
}

const run = function () {
  return wrapper("绿灯", 1000)
    .then(() => wrapper("黄灯", 2000))
    .then(() => wrapper("红灯", 1000))
    .finally(() => run());
};

// async写法
async function conduct() {
  await wrapper("绿灯", 1000);
  await wrapper("黄灯", 2000);
  await wrapper("红灯", 1000);
  conduct();
}

// 涉及时间，JS中无同步等待时间的处理机制
// call back
// Promise
// async await
