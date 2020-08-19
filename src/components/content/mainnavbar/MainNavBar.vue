<template>
  <div id="navbar">
    <div class="container">
      <transition
        appear
        name="logoTransition"
        enter-active-class="animate__animated animate__lightSpeedInLeft"
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
        name="navbarTransition"
        enter-active-class="animate__animated animate__lightSpeedInRight"
      >
        <div class="navCategory">
          <el-menu                          
            mode="horizontal"
            menu-trigger="click"
            router
            :default-active="$route.path"
            class="navMenu"
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/mainblog">博客</el-menu-item>
            <el-menu-item index="/diary">日记</el-menu-item>
            <el-menu-item index="/mark">留言</el-menu-item>
          </el-menu>
          <el-dropdown trigger="click" class="dropDown"  @command="changeThemes">
            <div class="el-dropdown-link">
              主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdownMenu">
              <el-dropdown-item command="morning">Morning</el-dropdown-item>
              <el-dropdown-item command="evenfall">evenfall</el-dropdown-item>
              <el-dropdown-item command="night">Night</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </transition>
    </div>
  </div>
</template>
 
<script>
import toggleTheme from "common/themes";
export default {
  name: "NavBar",
  methods: {
    changeThemes(command) {
      toggleTheme(command);
    },
  },
};
</script> 


<style  scoped>
/* ele导航样式表（导航+下拉菜单） */
@import "~assets/css/ele-style/main-navbar.css";

/* 组件样式 */
/* ----左侧logo---- */
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
  cursor: pointer;
}
.siteLogoContainer:hover {
  animation: heartbeat 0.8s 0.5s infinite;
}
.siteLogo {
  font-size: 55px;
  color: white;
  text-shadow: var(--logTextShadow);
}
.logoSup {
  font-size: 25px;
}
.avatar img {
  margin-right: 20px;
  width: 50px;
  border-radius: 3px;
}
@keyframes heartbeat {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  25% {
    transform: scale(1.05, 1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
/* ----右侧导航分类---- */
.navCategory {
  display: flex;
  align-items: center;
}
</style>