<template>
  <div>
    <div class="Articles" v-for="item in blogDatas">
      <img src="~assets/img/myAvatar/myAvatar.jpg" alt class="articleImg" />
      <div class="content">
        <div class="articleTitle">{{item.blogTitle}}</div>
        <i class="el-icon-collection-tag"></i>
        <span v-for="blogTag in item.blogTags">{{blogTag}}</span>
        <div>
          <i class="el-icon-time"></i>
          发布时间:{{item.blogPutoutDate}}
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      blogDatas: null,
    };
  },
  created() {
    this.blogDatas = JSON.parse(window.localStorage.getItem("blogDatas"));
  }
};
</script>

<style scoped>
.Articles {
  display: flex;
  width: 100%;
  height: 230px;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow: hidden;
}

.articleImg {
  width: 40%;
}

.content {
  padding: 10px 0 0 20px;
}

.articleTitle {
  padding: 0 10px;
  font-weight: 500;
  font-size: 20px;
}
</style>