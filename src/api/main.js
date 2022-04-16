import request from "../request";

export function getImagesMain(params) {
  return request({
    url: "/curated",
    method: "get",
    data: params,
  });
}
