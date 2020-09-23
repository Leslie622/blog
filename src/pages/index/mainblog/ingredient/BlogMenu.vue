<template>
  <transition appear enter-active-class="animate__animated animate__zoomIn animate__faster ">
    <el-col :span="4" class="blogMenu">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <i class="iconfont icon-html"></i>
          <span slot="title">Html</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="iconfont icon-css"></i>
          <span slot="title">Css</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="iconfont icon-java-script"></i>
          <span slot="title">JavaScript</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="iconfont icon-vue"></i>
          <span slot="title">Vue</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </transition>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
@import "~assets/css/ele-style/main-blog-menu.css";
</style>