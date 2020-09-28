<template>
  <div class="Article" @click="itemClick">
    <img src="~assets/img/myAvatar/myAvatar.jpg" alt class="articleImg" />
    <div class="content">
      <div class="articleTitle">{{blogData.blogTitle}}</div>
      <div class="excerpt">
        <div class="excerptContent">
          在触发DOM上的某个事件时，会产生一个事件对象event，这个事件对象包含着所有与事件有关的信息，例如事件是冒泡还是捕获，事件的目标，鼠标坐标，键盘按下的键，等等信息，不要太好用
          下面一起来看看event事件对象都有哪些内容吧。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。你想要的内容。
        </div>
      </div>
      <div class="meta">
        <div class="pubdate">
          <i class="el-icon-time"></i>
          <span>{{blogData.blogPutoutDate}}</span>
        </div>
        <div class="tagContent">
          <i class="el-icon-collection-tag"></i>
          <span
            v-for="blogTag in blogData.blogTags"
            class="blogTag"
            :style="DynamicBG(blogTag)"
          >{{blogTag}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { DynamicBG } from "common/utils";

export default {
  name: "",
  props: {
    blogData: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    DynamicBG,
    itemClick() {
      //跳转到详情页并携带内容
      this.$router.push({ path: "/detail" });
    },
  },
};
</script>

<style scoped>
.Article {
  display: flex;
  width: 100%;
  min-width: 1060px;
  height: 380px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 10px;
  font-family: 幼圆;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow .3s;
}

.Article:hover {
  box-shadow: 0 2px 15px rgba(0, 0, 0, .2);
}

.articleImg {
  width: 40%;
}

.content {
  position: relative;
  padding: 15px;
}

.articleTitle {
  padding: 10px;
  font-weight: 500;
  font-size: 45px;
}

.excerpt {
  margin-top: 20px;
  padding: 20px;
}

.excerptContent {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  width: 100%;
  height: 80px;
  font-size: 18px;
  overflow: hidden;
}

.blogTag {
  margin: 0 3px;
  padding: 3px 8px;
  border-radius: 3px;
  color: white;
  background-color: #00acac;
}

.meta {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 15px;
  width: calc(100% - 70px);
  padding: 20px;
}

i {
  margin-right: 5px;
  font-size: 25px;
}

.pubdate, .tagContent {
  display: flex;
  align-items: center;
}

</style>