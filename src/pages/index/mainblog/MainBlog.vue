<template>
  <div class="MainBlog">
    <blog-menu />
    <article-list :blogDatas="blogDatas" />
  </div>
</template>
 
<script>
import BlogMenu from "../mainblog/ingredient/BlogMenu";
import ArticleList from "../mainblog/ingredient/ArticleList";

import { request } from "network/request";

export default {
  name: "",
  data() {
    return {
      //博客文章的顺序，请求到这里
      blogDatas: [],
    };
  },
  created() {
    request({
      method: "get",
      url: `/blog/query/withcategory?cate_id=${75}&pageNum=2&pageSize=10`,
    }).then((res) => {
      console.log(res);
      this.blogDatas = res.data.data
     });
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f3f3f3";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  components: {
    BlogMenu,
    ArticleList,
  },
};
</script>

<style scoped>
.MainBlog {
  display: flex;
}
</style>