import request from "../request";

export function getImagesMain(params: FormData) {
  console.log(params)
  return request({
    url: "/curated",
    method: "get",
    data: params,
  });
}
