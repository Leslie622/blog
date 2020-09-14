<template>
  <div class="wrapper">
    <div class="title">聚焦</div>
    <div class="container">
      <div class="hotArticles" v-for="item in blogDatas">
        <img src="../../../../assets/img/myAvatar/myAvatar.jpg" alt class="articleImg" />
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
  },
};
</script>

<style scoped>
.wrapper {
  width: 40%;
  margin: -40px auto;
  font-family: 幼圆;
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  border-top: 1px dashed black;
}

.title {
  width: 100%;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
}

.hotArticles {
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