<template>
  <div class="MainBlog">
    <blog-menu />
    <article-list :blogDatas="blogDatas" />
  </div>
</template>
 
<script>
import BlogMenu from "../mainblog/ingredient/BlogMenu";
import ArticleList from "../mainblog/ingredient/ArticleList";

export default {
  name: "",
  data() {
    return {
      //博客文章的顺序，请求到这里
      blogDatas: null,
    };
  },
  created() {
    this.blogDatas = JSON.parse(window.localStorage.getItem("blogDatas"));
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