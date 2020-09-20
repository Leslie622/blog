<template>
  <div>
    <div class="mulu"></div>
    <!-- <p><h3>目录</h3><ul><li><a href="#_1">（一）定义</a></li><li><a href="#HTML_4">（二）HTML事件处理函数</a></li><ul><li><a href="#__16">① 特点</a></li><li><a href="#__46">② 缺点</a></li></ul><li><a href="#DOM0_56">（三）DOM0级事件处理函数</a></li><ul><li><a href="#__58">① 使用</a></li><li><a href="#__77">② 删除</a></li><li><a href="#__89">③ 缺点</a></li></ul><li><a href="#DOM2_94">（四）DOM2级事件处理函数</a></li><ul><li><a href="#__100">① 使用</a></li><li><a href="#__110">② 删除</a></li><li><a href="#__115">③ 注意</a></li></ul></ul></p> -->
    <mavon-editor v-html="blogContent" class="show" />
  </div>
</template>
 
<script>
import marked from "marked";
export default {
  name: "",
  data() {
    return {
      blogContent: null,
    };
  },
  created() {
    this.blogContent = this.$route.query.blogContent;
  },
  // mounted() {
  //   let ul = document.querySelectorAll("ul")[0];
  //   console.log(ul.cloneNode(true));
  //   let mulu = document.querySelector(".mulu")
  //   mulu.appendChild(ul)
  // },
};
</script>

<style scoped>
@import "~assets/css/mavon-editor-style/mavon-editor.css";

.show {
  width: 50%;
  padding: 20px;
}

.mulu{
  position: fixed;
  top: 20px;
  right: 0;
}
</style>