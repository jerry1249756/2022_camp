import _axios from "axios";

const instance = _axios.create({
  //baseURL: "http://localhost:4000/api", //local test
  //baseURL: "http://localhost:5000/api", //local heroku
  baseURL: "https://ntuee-monopoly.herokuapp.com/api", //deploy heroku
  timeout: 1000,
});

export default instance;
