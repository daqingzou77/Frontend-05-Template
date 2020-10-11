/**
 * JS中异步编程的终极方案，是开发人员能够以书写同步代码的形式去优雅的处理异步代码
 * 本质上是将Promise与Generator结合
 *
 */

function wSleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function runAsync() {
  while (true) {
    await sleep(red, 1000);
    await sleep(yellow, 2000);
    await sleep(green, 1000);
  }
}

// 自定义事件
function happen(ele, eventName) {
  return new Promise((resolve, reject) => {
    ele.addEventListener(eventName, resolve, { once: true });
  });
}

// winAsync
async function winAsync() {
  while (true) {
    red();
    await wSleep(1000);
    yellow();
    await wSleep(2000);
    green();
    await wSleep(1000);
  }
}
