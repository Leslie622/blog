<template>
  <div id="navbar">
    <div class="container">

        <site-logo />
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
    return {};
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
  right: 0;
  left: 0;
  top: 0;
  position: fixed;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  min-width: 1400px;
  height: 80px;
  font-family: ios7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: var(--navBg);
}
</style>