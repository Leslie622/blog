<template>
  <div>
    <div>
      <div class="siteLogoContainer">
        <div class="avatar">
          <img src="~assets/img/myAvatar/myAvatar.jpg" alt="网络头像" />
        </div>
        <div class="siteLogo">
          <i>
            Leslie
            <sup class="logoSup">blog</sup>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "sitelogo",
};
</script>

<style scoped>
.siteLogoContainer {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.siteLogo {
  font-size: 55px;
  text-shadow: var(--logTextShadow);
  color: var(--logoTextColor);
}
.logoSup {
  font-size: 25px;
}
.avatar img {
  width: 50px;
  margin-right: 20px;
  border-radius: 3px;
}
</style>