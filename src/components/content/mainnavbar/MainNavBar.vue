<template>
  <div id="navbar">
    <div class="container">
      <transition
        appear
        name="logoTransition"
        enter-active-class="animate__animated animate__lightSpeedInLeft"
        leave-active-class="animate__animated animate__zoomIn"
      >
        <div class="siteLogoContainer">
          <div class="avatar">
            <img src="~assets/img/myAvatar/myAvatar.jpg" alt="网络头像" />
          </div>
          <div class="siteLogo">
            <i>
              Leslie
              <sup class="logoSup">blog</sup>
            </i>
          </div>
        </div>
      </transition>
      <transition
        appear
        name="navMenuTransition"
        enter-active-class="animate__animated animate__lightSpeedInRight"
        leave-active-class="animate__animated animate__zoomIn"
      >
        <div class="navCategory">
          <el-menu
            mode="horizontal"
            text-color="#ffffff"
            active-text-color="#D4AF37"
            menu-trigger="click"
            router
            :default-active="$route.path"
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/mainblog">博客</el-menu-item>
            <el-menu-item index="/diary">日记</el-menu-item>
            <el-menu-item index="/mark">留言</el-menu-item>
          </el-menu>
          <el-dropdown trigger="click" class="dropDown">
            <div class="el-dropdown-link">
              主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdownMenu">
              <el-dropdown-item>Morning</el-dropdown-item>
              <el-dropdown-item>evenfall</el-dropdown-item>
              <el-dropdown-item>Night</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </transition>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "NavBar",
};
</script> 


<style  scoped>
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
  height: 100px;
  font-family: ios7;
}

.siteLogoContainer {
  display: flex;
  align-items: center;
}

.navCategory {
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
/* ele导航样式 */
.el-submenu__title {
  margin-left: 10px;
}
.container .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
.popup {
  margin-right: 95px;
  background-color: transparent;
}
.el-menu.el-menu--popup.el-menu--popup-bottom-start {
  min-width: 120px;
  background-color: transparent;
}
.el-menu.el-menu--popup.el-menu--popup-bottom-start .el-menu-item {
  width: 120px;
  text-align: center;
  color: #000000;
  background-color: transparent;
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* ele下拉菜单样式 */
.dropDown.el-dropdown {
  padding: 20px;
  color: #fff;
  cursor: pointer;
}
.dropdownMenu.el-dropdown-menu {
  min-width: 70px;
  border: none;
  color: #fff;
  background-color: transparent;
}
.dropdownMenu .el-dropdown-menu__item {
  color: #fff;
  text-align: center;
}
.dropdownMenu.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  display: none;
}
.dropdownMenu .el-dropdown-menu__item:focus,
.dropdownMenu .el-dropdown-menu__item:not(.is-disabled):hover {
  color: #d4af37;
  background-color: transparent;
}
</style>