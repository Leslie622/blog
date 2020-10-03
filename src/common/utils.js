import { request } from "network/request";
import { Notification } from "element-ui";

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
    case "CSS":
      return {
        backgroundColor: " rgb(21, 114, 182)",
      };
    case "JavaScript":
      return {
        backgroundColor: "rgb(255, 192, 34)",
      };
    case "Vue":
      return {
        backgroundColor: "rgb(65, 184, 131)",
      };
    case "Webpack":
      return {
        backgroundColor: "rgb(85,167,221)",
      };
  }
}



// 登陆请求
export function LoginRequest() {
  request({
    method: "post",
    url: "/login",
    data: {
      account: this.account,
      password: this.password,
    },
  }).then((res) => {
    if (res.data.code === 200) {
      //保存用户id
      window.localStorage.setItem("user_id", res.data.data.id);
      window.location.href = "/admin.html";
    } else {
      Notification({
        type: "error",
        title: "输入有误",
        message: "您输入的账号或密码有错误",
        duration: 3000,
      });
    }
  });
}

