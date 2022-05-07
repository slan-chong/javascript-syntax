const userInfo = [
  { userName: "Alice", birth: "1999-12-04" },
  { userName: "Slan", birth: "1999-12-20" },
  { userName: "Foo", birth: "2020-12-21" },
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

getData("Slan")
  .then((user) => {
    return currentAge(user.birth);
  })
  .then((age) => {
    console.log(age);
  })
  .catch((e) => {
    console.log(e);
  });
