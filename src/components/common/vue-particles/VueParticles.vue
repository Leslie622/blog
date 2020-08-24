<template>
  <div>
    <vue-particles
      v-if="isParticles"
      :color="particlesConfig.color"
      :particlesNumber="particlesConfig.number"
      :shapeType="particlesConfig.shapeType"
      :linesColor="particlesConfig.linesColor"
      :lineLinked="particlesConfig.lineLinked"
      :clickMode="particlesConfig.clickMode"
      class="Particles"
    ></vue-particles>
  </div>
</template>
 
<script>
export default {
  name: "vueparticles",
  data() {
    return {
      //背景粒子配置
      isParticles: true,
      particlesConfig: {
        color: "#d4af37",
        number: 30,
        shapeType: "star",
        linesColor: "#d4af37",
        lineLinked: true,
        clickMode: "repulse",
      },
    };
  },
  mounted() {
    this.$bus.$on("toggleParticles", (themesConfig) => {
      this.isParticles = themesConfig.isParticles;
    });
  },
};
</script>

<style scoped>
</style>