<template>
  <div>
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
  name: "",
  data() {
    return {
      themeConfig: [
        {
          theme: "' 一抹黄 '",
          config: evenfallConfig,
        },
        {
          theme: "灰白黑",
          config: conciseConfig,
        },
        {
          theme: "万缕朝阳",
          config: morningConfig,
        },
        {
          theme: "皓月",
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

<style scoped>
.navCategory {
  display: flex;
  align-items: center;
}
</style>