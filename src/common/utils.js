// 时间格式
export function formatDateTime(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  let s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
}

// 对象深度克隆
export function deepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
      }
    }
  }
  return newObj
}


