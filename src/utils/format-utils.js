export function formatCount(count) {
  if (count <= 0) {
    return count;
  }

  if (count < 1000) {
    return count;
  } else if (count < 100000000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 100000000) + "亿";
  }
}

export function formatImg(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}
