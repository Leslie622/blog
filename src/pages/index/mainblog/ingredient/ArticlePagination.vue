<template>
  <el-pagination
    background
    layout="prev, pager, next"
    prev-text="上一页"
    next-text="下一页"
    :total="60"
    ppager-count="15"
    class="articlePagination"
  ></el-pagination>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
@import "~assets/css/ele-style/articles-pagination.css";


</style>