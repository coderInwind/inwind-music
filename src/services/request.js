import axios from "axios";

import { BASE_URL, TIME_OUT } from "./config";

export default function request(option) {
  return new Promise((resolve, reject) => {
    //创建axios实例

    const instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });

    //请求拦截和响应拦截
    instance.interceptors.request.use((config) => {
      return config;
    });

    instance.interceptors.request.use((config) => {
      return config;
    });

    instance(option)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
