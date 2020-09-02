<template>
  <div>
    <div  v-for="(item,index) in blogDatas" :key="index">
      <span>{{item.blogTitle}}</span>
      <div>{{item.blogContent}}</div>
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
  mounted() {
    this.blogDatas = JSON.parse(window.localStorage.getItem("blogDatas"));
    console.log(this.blogDatas);
  },
};
</script>

<style scoped>

body {
  background: antiquewhite;
}
</style>