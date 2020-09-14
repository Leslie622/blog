<template>
  <transition
    appear
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__backOutRight"
  >
    <div id="navbar">
      <div class="container">
        <site-logo @click.native="controlCheckUserPG" />
        <nav-bar-category />
      </div>
    </div>
  </transition>
</template>
 
<script>
import SiteLogo from "./ingredient/SiteLogo";
import NavBarCategory from "./ingredient/NavBarCategory";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    controlCheckUserPG() {
      this.$emit("switchCheckUserPG", true);
    },
  },
  components: {
    SiteLogo,
    NavBarCategory,
  },
};
</script> 


<style  scoped>
#navbar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.95);
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0 100%);
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-family: 幼圆;
}

.animate__slideInRight {
  --animate-duration: 0.3s;
}
</style>
