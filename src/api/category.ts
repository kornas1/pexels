import request from "../request";

export function getImagesCategory(params: FormData) {
  return request({
    url: "/search",
    method: "get",
    data: params,
  });
}
