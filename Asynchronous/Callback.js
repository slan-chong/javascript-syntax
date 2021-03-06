const getBirth = (Name, callback) => {
  const userInfo = [
    { userName: "Foo", birth: "2000-1-1" },
    { userName: "PSY", birth: "1977-12-31" },
    { userName: "Elon Musk", birth: "1971-06-08" },
  ];
  for (let user of userInfo) {
    if (Name === user.userName) {
      return callback(user.birth);
    }
  }
};
const currentAge = (birth) => {
  const today = new Date();
  const birthDate = new Date(birth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
const virtualAge = (birth) => {
  const today = new Date();
  const birthDate = new Date(birth);
  return today.getFullYear() - birthDate.getFullYear();
};

console.log(getBirth("Elon Musk", currentAge));
console.log(getBirth("Elon Musk", virtualAge));
