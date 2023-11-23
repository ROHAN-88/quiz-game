import axios from "axios";

export const $axiosConf = axios.create({
  baseURL: "https://opentdb.com",
  timeout: 5000,
  //   headers: { "X-Custom-Header": "foobar" },
});
