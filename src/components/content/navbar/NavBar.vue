<template>
  <div id="navbar">
    <div class="container">
      <transition
        appear
        name="logoTransition"
        enter-active-class="animate__animated animate__lightSpeedInLeft"
        leave-active-class="animate__animated animate__zoomIn"
      >
        <div class="siteLogo">
          <div class="avatar">
            <img src="~assets/img/myAvatar/myAvatar.jpg" alt="网络头像" />
          </div>
          <div class="siteLogo">
            Leslie
            <sup class="logoSup">blog</sup>
          </div>
        </div>
      </transition>
      <el-menu
        mode="horizontal"
        text-color="#ffffff"
        active-text-color="#D4AF37"
        menu-trigger="click"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">博客</el-menu-item>
        <el-menu-item index="3">日记</el-menu-item>
        <el-submenu index="4" popper-class="pop" text-color="#000000">
          <template slot="title">主题</template>
          <el-menu-item index="2-1">morning</el-menu-item>
          <el-menu-item index="2-2">evenfall</el-menu-item>
          <el-menu-item index="2-3">night</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "NavBar",
};
</script> 


<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 100px;
  font-family: ios7;
}

.siteLogo {
  display: flex;
  align-items: center;
}
.logoSup {
  font-size: 25px;
}
.avatar img {
  vertical-align: top;
  font-size: 0;
  border-radius: 3px;
  width: 50px;
  margin-right: 20px;
}

.siteLogo {
  font-size: 55px;
  color: white;
}

.el-menu {
  background-color: transparent;
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: transparent;
}

.el-menu.el-menu--horizontal,
.el-menu--horizontal > .el-menu-item {
  margin: 0 10px;
  font-size: 15px;
  border-bottom: none;
}
</style>

<style>
.el-submenu__title {
  margin-left: 10px;
}
.container .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}

.pop {
  margin-right: 55px;
  background-color: transparent;
}

.el-menu.el-menu--popup.el-menu--popup-bottom-start {
  background-color: transparent;
}

.el-menu.el-menu--popup.el-menu--popup-bottom-start .el-menu-item {
  text-align: center;
  color: #000000;
  background-color: transparent;
}
</style>