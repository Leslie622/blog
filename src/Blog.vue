<template>
  <div id="blog">
    <router-view />
    <vue-particles></vue-particles>
    <main-nav-bar></main-nav-bar>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainnavbar/MainNavBar";
import VueParticles from "./components/common/vue-particles/VueParticles";

export default {
  name: "Blog",
  data() {
    return {};
  },
  components: {
    MainNavBar,
    VueParticles,
  },
};
</script>

<style>
/* 样式初始化 */
@import "./assets/css/base.css";
</style>
