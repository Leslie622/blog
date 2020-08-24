<template>
  <div id="blog">
    <router-view />
    <vue-particles />
    <main-nav-bar />
    <check-user></check-user>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainnavbar/MainNavBar";
import VueParticles from "components/common/vue-particles/VueParticles";
import CheckUser from "components/content/check-user/CheckUser"

export default {
  name: "Blog",
  data() {
    return {};
  },
  components: {
    MainNavBar,
    VueParticles,
    CheckUser
  },
};
</script>

<style>
/* 样式初始化 */
@import "../../assets/css/base.css";
</style>
