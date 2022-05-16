const myObj = {
  title: "Object Value",
  year: 0,
  rand: Math.random(),
  leg: true,
  array: [1, 2, 3],
  countryList: {
    jp: "Japan",
    us: "America",
    hk: "Hong Kong",
    tw: "Taiwan",
  },
  sayHi(word) {
    console.log(this.rand + "Hello World " + word);
  },
};
Object.values(myObj).map((e) => {
  console.log(e);
});
for (let i in myObj) {
  console.log(myObj[i]);
}
