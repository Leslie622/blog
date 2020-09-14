<template>
  <div class="home">
    <home-banner></home-banner>
    <hot-articles />
  </div>
</template>
 
<script>
import HomeBanner from "../home/ingredient/HomeBanner"
import HotArticles from "../home/ingredient/HotArticles"
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
