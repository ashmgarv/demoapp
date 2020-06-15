import axios from "axios";
import data from "../config.json";

export function login(username, password) {
  const { login } = data[0].server_urls;
  return axios.post(login, {
    username: username,
    password: password,
  });
}

export function register(username, password, fullname) {
  const { register } = data[0].server_urls;
  return axios.post(register, {
    username: username,
    password: password,
    fullname: fullname,
  });
}
