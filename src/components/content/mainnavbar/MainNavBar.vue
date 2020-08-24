<template>
  <div id="navbar">
    <div class="container">
      <transition
        appear
        name="logoTransition"
        enter-active-class="animate__animated animate__lightSpeedInLeft"
      >
        <a href="/admin.html">
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
        </a>
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
          <el-dropdown trigger="click" class="dropDown" @command="changeThemes" placement="bottom">
            <div class="el-dropdown-link">
              主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdownMenu">
              <el-dropdown-item
                v-for="(item,key) in themeConfig"
                :command="item.config"
                :key="key"
              >{{item.theme}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </transition>
    </div>
  </div>
</template>
 
<script>
import toggleTheme from "common/themes";
import {
  evenfallConfig,
  conciseConfig,
  morningConfig,
  nightConfig,
  closePariticles,
} from "common/pariticles";

export default {
  name: "NavBar",
  data() {
    return {
      themeConfig: [
        {
          theme: "Evenfall",
          config: evenfallConfig,
        },
        {
          theme: "简约",
          config: conciseConfig,
        },
        {
          theme: "Morning",
          config: morningConfig,
        },
        {
          theme: "Night",
          config: nightConfig,
        },
        {
          theme: "关闭粒子特效",
          config: closePariticles,
        },
      ],
    };
  },
  methods: {
    //切换主题
    changeThemes(themesConfig) {
      if (themesConfig.themes) {
        toggleTheme(themesConfig.themes);
      }
      this.$bus.$emit("toggleParticles", themesConfig);
    },
  },
};
</script> 


<style  scoped>
/* --------ele导航样式表（导航+下拉菜单)-------- */
@import "~assets/css/ele-style/main-navbar.css";

/* --------组件样式-------- */
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
  min-width: 1400px;
  height: 80px;
  font-family: ios7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: var(--navBg);
}
.siteLogoContainer {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.siteLogo {
  font-size: 55px;
  color: var(--logoTextColor);
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
/* ----右侧导航分类---- */
.navCategory {
  display: flex;
  align-items: center;
}
</style>