<template>
  <div id="admin">
    <router-view />
    <admin-nav-bar v-if="switchMenu" />
  </div>
</template>

<script>
import AdminNavBar from "components/admin/admin-navbar/AdminNavBar";

export default {
  name: "admin",
  data() {
    return {
      switchMenu: true,
    };
  },
  created() {
    //localStorage -> 获取用户id -> 保存到 -> vuex
    let user_id = window.localStorage.getItem("user_id");
    this.$store.commit("saveUserId", +user_id);
  },
  mounted() {
    //监听详情页事件
    this.$bus.$on("switchMenu", (res) => {
      this.switchMenu = res;
    });
  },
  components: {
    AdminNavBar,
  },
};
</script>

<style>
/* 样式初始化 */
@import "../../assets/css/admin-base.css";
</style>
