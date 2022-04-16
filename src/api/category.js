import request from "../request";

export function getImagesCategory(params) {
  return request({
    url: "/search",
    method: "get",
    data: params,
  });
}
