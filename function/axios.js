import axios from "axios";

//https://randomuser.me/api

const thenGetData = () => {
  axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      console.log(data);
      return JSON.stringify(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
// thenGetData();

const getData = async () => {
  try {
    const { data } = await axios.get("https://randomuser.me/api");
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  } catch (e) {
    console.log(e);
  }
};

console.log(await getData());
