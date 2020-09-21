//vue-cli4多页面
const createPage = (name, title, chunk = '') => {
  return {
    entry: `src/pages/${name}/main.js`,
    template: `public/${name}.html`,
    filename: `${name}.html`,
    title,
    chunks: ['chunk-vendors', 'chunk-common', chunk || name]
  }
}


module.exports = {
  pages: {
    index: createPage('index', 'Leslie-blog'),
    admin: createPage('admin', '管理员界面'),
  },
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "router": "@/router",
        "store": "@/store",
        "views": "@/views",
      }
    }
  },
}

