// worker 脚本文件
const start = () => {
  let count = 0;
  setTimeout(() => {
    // 给主线程传值
    postMessage(++count);
  }, 1500);
};

start();
