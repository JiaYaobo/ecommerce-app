import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";

let TOKEN = "";

if (localStorage.getItem("persist:root")) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser?.accessToken
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser?.accessToken
    : "";
} else {
  TOKEN = "";
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
