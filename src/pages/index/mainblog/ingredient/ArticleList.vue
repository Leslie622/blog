<template>
  <transition
    appear
    enter-active-class="animate__animated animate__zoomIn animate__faster"
  >
    <div class="wrapper">
      <div class="articleList">
        <div class="articleListContainer">
          <articles-list-item
            v-for="(item, index) in blogDatas"
            :key="index"
            :blogData="item"
            class="articlesListItem"
          ></articles-list-item>
        </div>
      </div>
      <div class="Pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          :total="60"
          ppager-count="15"
          class="articlePagination"
        ></el-pagination>
      </div>
    </div>
  </transition>
</template>
 
<script>
import ArticlesListItem from "./ArticlesListItem";

export default {
  name: "",
  props: {
    blogDatas: {
      type: Array,
    },
  },
  components: {
    ArticlesListItem,
  },
};
</script>

<style scoped>
@import "~assets/css/ele-style/articles-pagination.css";
.wrapper {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  min-width: 1150px;
  height: calc(100vh - 20px);
  margin: 10px 15px 10px 10px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 2px 12px 0 rgb(0, 0, 0, 0.1);
  background-color: white;
  overflow: hidden;
}

.articleList {
  width: 100%;
  height: 820px;
  border-radius: 15px;
  overflow: hidden;
  overflow-y: scroll;
}

.articleListContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;
}

.articlesListItem {
  margin-bottom: 30px;
}

.Pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
}
</style>