<template>
  <div id="blog">
    <router-view />
    <switch-nav-bar
      @click.native="ControlBus"
      ref="switchNavbar"
      v-if="switchMenu"
      @switchMenu="switchMenu"
    ></switch-nav-bar>
    <main-nav-bar
      v-if="isMainNavbarPG"
      @ControlBus="ControlBus"
      @switchCheckUserPG="switchCheckUserPG"
    />
    <check-user v-if="isCheckUserPG" @switchCheckUserPG="switchCheckUserPG"></check-user>
    <css-mask v-if="isMaskPG"></css-mask>
  </div>
</template>
<script>
import MainNavBar from "components/content/main-navbar/MainNavBar";
import SwitchNavBar from "components/content/switch-main-navbar/SwitchNavBar";
import CheckUser from "components/content/check-user/CheckUser";
import CssMask from "components/common/mask/CssMask";

// 粒子插件
import VueParticles from "components/common/vue-particles/VueParticles";

export default {
  name: "Blog",
  data() {
    return {
      isMaskPG: false,
      isMainNavbarPG: false,
      isCheckUserPG: false,
      switchNavBarActive: true,
      switchMenu: true,
    };
  },
  mounted() {
    //监听详情页事件
    this.$bus.$on("switchMenu", (res) => {
      this.switchMenu = res;
    });
  },
  methods: {
    switchCheckUserPG(isCheckUserPG) {
      this.isCheckUserPG = isCheckUserPG;
    },
    ControlBus() {
      this.isMainNavbarPG = !this.isMainNavbarPG;
      this.isMaskPG = !this.isMaskPG;
      this.$refs.switchNavbar.isActive = !this.$refs.switchNavbar.isActive;
    },
  },
  components: {
    MainNavBar,
    VueParticles,
    CheckUser,
    SwitchNavBar,
    CssMask,
  },
};
</script>

<style>
/* 样式初始化 */
@import "../../assets/css/base.css";
</style>
