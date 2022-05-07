const userInfo = [
  { userName: "Foo", birth: "2000-1-1" },
  { userName: "PSY", birth: "1977-12-31" },
  { userName: "Elon Musk", birth: "1971-06-08" },
];

const getData = (Name) => {
  for (let user of userInfo) {
    if (Name === user.userName) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(user);
        }, 1000);
      });
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Not allowed to access data."));
    });
  });
};
const currentAge = (birth) => {
  const today = new Date();
  const birthDate = new Date(birth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(age);
    }, 1000);
  });
};
const virtualAge = (birth) => {
  const today = new Date();
  const birthDate = new Date(birth);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(today.getFullYear() - birthDate.getFullYear());
    }, 1000);
  });
};
let queryName = "PSY";
getData(queryName)
  .then((user) => {
    return currentAge(user.birth);
  })
  .then((age) => {
    console.log("今年:" + age);
  })
  .catch((e) => {
    console.log(e);
  });
