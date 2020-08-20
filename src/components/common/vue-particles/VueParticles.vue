<template>
  <div>
    <vue-particles
      v-if="isParticles"
      :color="particlesConfig.color"
      :particlesNumber="particlesConfig.number"
      :shapeType="particlesConfig.shapeType"
      :linesColor="particlesConfig.linesColor"
      :lineLinked="particlesConfig.lineLinked"
      class="Particles"
    ></vue-particles>
  </div>
</template>
 
<script>
export default {
  name: "vueparticles",
  data() {
    return {
      key: 0,
      //背景粒子配置
      isParticles: true,
      particlesConfig: {
        color: "#d4af37",
        number: 40,
        shapeType: "star",
        linesColor: "#d4af37",
        lineLinked: false,
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