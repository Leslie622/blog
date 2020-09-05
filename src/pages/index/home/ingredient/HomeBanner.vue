<template>
  <div class="banner">
    <transition appear enter-active-class="animate__animated animate__zoomInDown">
      <div class="container">
        <span class="bannerText"></span>
        <home-contact />
      </div>
    </transition>
    <home-banner-decor />
  </div>
</template>
 
<script>
import HomeBannerDecor from "../ingredient/HomeBannerDecor";
import HomeContact from "../ingredient/HomeContact";
import { ityped } from "common/ityped";

export default {
  name: "",
  mounted() {
    ityped(".bannerText", ["风继续吹", "Leslie"]);
  },
  components: {
    HomeBannerDecor,
    HomeContact,
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  height: 550px;
  font-family: 幼圆;
  font-size: 50px;
  text-shadow: 0 0 5px #d4af37, 0 0 10px #d4af37;
  color: rgba(255, 255, 255, .774);
  background: url("~assets/img/bg/gaoshanshangdehuang-1.jpg") -160px -280px /
  110% 110% no-repeat fixed;
  clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 77%, 0 100%, 0 0);
}

.container {
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  width: 400px;
  height: 200px;
  margin: auto;
  text-align: center;
}

.bannerText {
  margin-left: 5px;
}

</style>
