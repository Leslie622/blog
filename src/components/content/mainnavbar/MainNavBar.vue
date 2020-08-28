<template>
  <div id="navbar">
    <div class="container">
      <site-logo @click.native="controlCheckUserPG" />
      <nav-bar-category />
    </div>
  </div>
</template>
 
<script>
import SiteLogo from "./ingredient/SiteLogo";
import NavBarCategory from "./ingredient/NavBarCategory";

export default {
  name: "NavBar",
  data() {
    return {
    };
  },
  methods: {
    controlCheckUserPG() {
      this.$emit("switchCheckUserPG", true);
    },
  },
  components: {
    SiteLogo,
    NavBarCategory,
  },
};
</script> 


<style  scoped>
/* --------ele导航样式表（导航+下拉菜单)-------- */
@import "~assets/css/ele-style/main-navbar.css";

#navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1400px;
  height: 80px;
  padding: 0 100px;
  font-family: ios7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: var(--navBg);
}
</style>