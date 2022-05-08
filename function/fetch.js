//endpoint, path, query
import fetch from "node-fetch";
const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await response.json();
  setLists(data);
};
const setLists = (data) => {
  data.forEach((element) => {
    console.log(element.title);
  });
};
getData();
