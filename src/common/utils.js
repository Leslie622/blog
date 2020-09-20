// 时间格式
export function formatDateTime(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + MM + "-" + d;
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


//文章标签动态背景

export function DynamicBG(blogTag) {
  switch (blogTag) {
    case "HTML":
      return {
        backgroundColor: "rgb(228, 79, 38)",
      };
      break;
    case "CSS":
      return {
        backgroundColor: " rgb(21, 114, 182)",
      };
      break;
    case "JavaScript":
      return {
        backgroundColor: "rgb(255, 192, 34)",
      };
      break;
    case "Vue":
      return {
        backgroundColor: "rgb(65, 184, 131)",
      };
      break;
    case "Webpack":
      return {
        backgroundColor: "rgb(85,167,221)",
      };
      break;
  }
}