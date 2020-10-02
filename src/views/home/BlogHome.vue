<template>
  <div class="home">
    <home-banner></home-banner>
    <hot-articles />
  </div>
</template>
 
<script>
import HomeBanner from "./ingredient/HomeBanner"
import HotArticles from "./ingredient/HotArticles"

export default {
  name: "BlogHome",
  data() {
    return {};
  },
  components:{
    HomeBanner,
    HotArticles,
  }
};
</script>

<style scoped>
</style>
