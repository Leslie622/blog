<template>
  <div id="blog">
    <router-view />
    <!-- <vue-particles /> -->
    <main-nav-bar @switchCheckUserPG="switchCheckUserPG" />
    <check-user v-if="isCheckUserPG" @switchCheckUserPG="switchCheckUserPG"></check-user>
  </div>
</template>

<script>
import MainNavBar from "components/content/main-navbar/MainNavBar";
import VueParticles from "components/common/vue-particles/VueParticles";
import CheckUser from "components/content/check-user/CheckUser";

export default {
  name: "Blog",
  data() {
    return {
      isCheckUserPG: false,
    };
  },
  methods: {
    switchCheckUserPG(isCheckUserPG) {
      this.isCheckUserPG = isCheckUserPG;
    },
  },
  components: {
    MainNavBar,
    VueParticles,
    CheckUser,
  },
};
</script>

<style>
/* 样式初始化 */
@import "../../assets/css/base.css";
</style>
