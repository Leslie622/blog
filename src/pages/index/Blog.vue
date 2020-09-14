<template>
  <div id="blog">
    <router-view />
    <main-nav-bar @switchCheckUserPG="switchCheckUserPG" v-if="isMainNavBarPG" />
    <switch-nav-bar @click.native="contorlMainNavBarPG"></switch-nav-bar>
    <check-user v-if="isCheckUserPG" @switchCheckUserPG="switchCheckUserPG"></check-user>
  </div>
</template>

<script>
import MainNavBar from "components/content/main-navbar/MainNavBar";
import SwitchNavBar from "../../components/content/switch-main-navbar/SwitchNavBar";
import CheckUser from "components/content/check-user/CheckUser";

// 粒子插件
import VueParticles from "components/common/vue-particles/VueParticles";

export default {
  name: "Blog",
  data() {
    return {
      isCheckUserPG: false,
      isMainNavBarPG: false,
    };
  },
  methods: {
    switchCheckUserPG(isCheckUserPG) {
      this.isCheckUserPG = isCheckUserPG;
    },
    contorlMainNavBarPG() {
      this.isMainNavBarPG = !this.isMainNavBarPG;
    },
  },
  components: {
    MainNavBar,
    VueParticles,
    CheckUser,
    SwitchNavBar,
  },
};
</script>

<style>
/* 样式初始化 */
@import "../../assets/css/base.css";
</style>
