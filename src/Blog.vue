<template>
  <div id="blog">
    <router-view />
     <main-nav-bar></main-nav-bar>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainnavbar/MainNavBar";

export default {
  name: "Blog",
  components: {
    MainNavBar,
  },
};
</script>

<style>
/* 样式初始化 */
@import "./assets/css/base.css";
</style>
