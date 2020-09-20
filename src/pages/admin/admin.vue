<template>
  <div id="admin">
    <router-view />
    <admin-nav-bar />
  </div>
</template>

<script>
import AdminNavBar from "components/admin/admin-navbar/AdminNavBar";

export default {
  name: "admin",
  data() {
    return {};
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
