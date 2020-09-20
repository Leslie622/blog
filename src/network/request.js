import axios from "axios"

export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  })

  //拦截器

  //请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 作用：
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，希望在界面中显示一些图标
    // 3.某些网络请求必须携带一些特殊的信息，比如登录的token
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res //注意操作完数据之后需要返回，否则拿不到数据
  }, err => {
    console.log(err);
  })

  //发送真正的网络请求
  return instance(config)
}

