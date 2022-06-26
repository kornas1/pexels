import _ from "lodash";
import axios, { AxiosRequestHeaders, ResponseType } from "axios";
import { parse, compile, Key } from "path-to-regexp";
import store from "./store";

axios.defaults.baseURL = "https://api.pexels.com/v1";

axios.interceptors.request.use(
  function(config) {
    config.headers!.Authorization =
      "563492ad6f91700001000001144a82244ce645b69edc061c1fa2e6bd";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


type HttpMethod = "get" | "delete" | "post" | "put" | "patch";

export type Options = {
  method?: HttpMethod
  data: FormData
  url: string
  headers?: AxiosRequestHeaders
  responseType?: ResponseType
  withCredentials?: boolean
}

type Data = {
  [key: string]: number | string | boolean | undefined;
}

const fetch = (options: Options) => {
  let {
    method = "get",
    data,
    url,
    headers,
    responseType,
    withCredentials = false,
  } = options;
  headers = headers || {};

  const cloneData = (data instanceof FormData ? data : _.cloneDeep(data)) as unknown as Data;

  try {
    let domin = "";
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      [domin] = url.match(/[a-zA-z]+:\/\/[^/]*/) || [];
      url = url.slice(domin.length);
    }
    const match = parse(url);
    url = compile(url)(data);
    for (let item of match) {
      if ((item as Key).name in cloneData) {
        delete cloneData[(item as Key).name];
      }
    }
    url = domin + url;
  } catch (e) {
    console.log((e as Error).message);
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

export default function request(options: Options) {
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
        return Promise.resolve({ success: false, code });
      }

      return Promise.reject({ success: false, code, message: message });
    });
}