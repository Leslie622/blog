<template>
  <div>
    <transition
      appear
      name="logoTransition"
      enter-active-class="animate__animated animate__lightSpeedInLeft"
    >
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
    </transition>
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
  color: var(--logoTextColor);
  text-shadow: var(--logTextShadow);
}
.logoSup {
  font-size: 25px;
}
.avatar img {
  margin-right: 20px;
  width: 50px;
  border-radius: 3px;
}
</style>