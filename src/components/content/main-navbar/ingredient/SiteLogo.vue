<template>
  <div class="sitelog">
    <div class="avatar">
      <img src="~assets/img/myAvatar/myAvatar.jpg" alt="网络头像" title="点击进入后台管理" />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "sitelogo",
};
</script>

<style scoped>
.sitelog {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  margin: 70px 0 0 200px;
  cursor: pointer;
}

.sitelog::before {
  content: "";
  position: absolute;
  right: -60px;
  bottom: 0;
  width: 200px;
  height: 1px;
  border-bottom: 2px dashed rgba(128, 128, 128, 0.4);
}

.avatar img {
  width: 80px;

  /* margin-left: 80px; */
  border-radius: 3px;
}
</style>