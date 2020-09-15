<template>
  <div class="wrapper">
    <div class="title">聚焦</div>
    <div class="container">
      <main-articles></main-articles>
    </div>
  </div>
</template>
 
<script>
import MainArticles from "../../mainblog/ingredient/MainArticles";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    MainArticles,
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
</style>