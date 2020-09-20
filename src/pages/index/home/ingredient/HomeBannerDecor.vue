<template>
  <div>
    <transition appear enter-active-class="animate__animated animate__slideInUp animate__delay-1s">
      <div class="decor"></div>
    </transition>
    <transition appear enter-active-class="animate__animated animate__slideInUp animate__delay-2s">
      <div class="decor"></div>
    </transition>
    <transition appear enter-active-class="animate__animated animate__slideInUp animate__delay-2s">
      <div class="decor"></div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
.decor {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.05);
  clip-path: polygon(50% 49%, 100% 0, 100% 100%, 47% 100%, 0 100%, 0 0);
}

.decor:nth-of-type(2) {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.1);
  clip-path: polygon(50% 21%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
}
.decor:nth-of-type(3) {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 126px;
  background-color: rgba(255, 255, 255, 0.2);
  clip-path: polygon(50% 0, 100% 35%, 100% 100%, 50% 100%, 0 100%, 0 35%);
}

.animate__slideInUp {
  --animate-delay: 0.3s;
}
</style>
