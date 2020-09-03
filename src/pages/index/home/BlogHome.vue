<template>
  <div class="home">
    <div class="banner">
      <span id="one"></span>
    </div>
  </div>
</template>
 
<script>
import { init } from "ityped";
export default {
  name: "BlogHome",
  data() {
    return {};
  },
  mounted() {
    const oneElement = document.querySelector("#one");
    init(oneElement, {
      showCursor: true,
      strings: ["风继续吹,不忍远离。","Leslie-blog"],
      loop: false,
      typeSpeed: 120,
      backSpeed:  100,
      onFinished: function () {
        const oneElement = document.querySelector(".ityped-cursor");
        oneElement.style.opacity = 0;
      },
    });
  },
};
</script>

<style scoped>
h2 {
  color: white;
}

.banner {
  height: 600px;
  font-family: 幼圆;
  font-size: 45px;
  text-align: center;
  line-height: 400px;
  color: rgba(255, 255, 255, 0.774);
  background: url("../../../assets/img/bg/gaoshanshangdehuang-1.jpg") 0 -200px /
    cover no-repeat fixed;
  clip-path: polygon(50% 0%, 100% 0, 100% 78%, 60% 100%, 40% 100%, 0 78%, 0 0);
}
</style>
<style>
.ityped-cursor {
  opacity: 1;
  font-size: 40px;
  animation: blink 0.6s infinite;
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}
</style>