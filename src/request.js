import _ from "lodash";
import axios from "axios";
import { parse, compile } from "path-to-regexp";
import store from "./store";

axios.defaults.baseURL = "https://api.pexels.com/v1";

axios.interceptors.request.use(
  function(config) {
    config.headers.Authorization =
      "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const fetch = (options) => {
  let {
    method = "get",
    data,
    url,
    headers,
    responseType,
    withCredentials = false,
  } = options;
  headers = headers || {};

  const cloneData = data instanceof FormData ? data : _.cloneDeep(data);

  try {
    let domin = "";
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      [domin] = url.match(/[a-zA-z]+:\/\/[^/]*/);
      url = url.slice(domin.length);
    }
    const match = parse(url);
    url = compile(url)(data);
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }
    url = domin + url;
  } catch (e) {
    console.log(e.message);
  }

  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, {
        params: cloneData,
        headers: headers,
        responseType: responseType,
      });
    case "delete":
      return axios.delete(url, {
        data: cloneData,
      });
    case "post":
      if (withCredentials) {
        return axios.post(url, cloneData, { headers, withCredentials });
      } else {
        return axios.post(url, cloneData, { headers });
      }
    case "put":
      return axios.put(url, cloneData);
    case "patch":
      return axios.patch(url, cloneData);
    default:
      return axios(options);
  }
};

export default function request(options) {
  return fetch(options)
    .then((response) => {
      const { statusText, status, data } = response;
      return Promise.resolve({
        success: true,
        message: statusText,
        code: status,
        results: data,
      });
    })
    .catch((error) => {
      const { response } = error;
      let code;
      let message;
      if (response && response instanceof Object) {
        const { data, statusText, status } = response;
        code = status;
        message = data.message || statusText;
      } else {
        code = 600;
        message = error.message || "Network error";
      }

      if (code === 401) {
        console.log("401 Unauthorized");
        store.dispatch();
        return Promise.resolve({ success: false, code });
      }

      return Promise.reject({ success: false, code, message: message });
    });
}
