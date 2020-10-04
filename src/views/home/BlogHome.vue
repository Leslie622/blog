<template>
  <div class="home">
    <router-view />
    <home-menu />
  </div>
</template>
 
<script>
import HomeMenu from "./ingredient/HomeMenu";

export default {
  name: "BlogHome",
  data() {
    return {};
  },
  components: {
    HomeMenu,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
