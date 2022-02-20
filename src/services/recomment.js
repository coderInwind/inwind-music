import request from "./request";

export function getTopBanners() {
  return request({ url: "/banner" });
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: { limit },
  });
}

export function getNewAlbum() {
  return request({
    url: "/album/newest",
  });
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: { id },
  });
}
