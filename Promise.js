const randomTimeOut = (resolve, reject) => {
  let timeOut = Math.random();
  console.log("set timeout to: " + timeOut + " seconds.");
  setTimeout(() => {
    if (timeOut < 0.5) {
      console.log("call resolve()...");
      resolve("200 OK");
    } else {
      console.log("call reject()...");
      reject("timeout in " + timeOut + " seconds.");
    }
  }, timeOut * 1000);
};
randomTimeOut();
