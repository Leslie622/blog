<template>
  <div class="mask"></div>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>