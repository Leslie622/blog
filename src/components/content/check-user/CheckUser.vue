<template>
  <div class="checkUser">
    <div class="content">
      <div class="verify"></div>
      <div class="hint">
        <div class="hintContent">
          <div class="hintText">
            如果您不是本站管理员
            <br />
            <br />请返回
          </div>
          <div class="back">Back</div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
.checkUser {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: 110%;
  background-repeat: no-repeat;
  background-image: url("~assets/img/bg/wallhaven-dgr973.png");
  animation: rollbg 20s infinite;
}

.content {
  position: relative;
  width: 800px;
  height: 480px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 10px 10px 48px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: transparent;
}

.verify {
  width: 800px;
  height: 480px;
  clip-path: polygon(0 0, 46% 0, 59% 100%, 0 100%);
  font-size: 0;
  background: linear-gradient(60deg, rgb(20, 113, 160), rgb(121, 150, 223));
}

.hint {
  position: absolute;
  top: 0;
  width: 800px;
  height: 480px;
  font-family: 幼圆;
  clip-path: polygon(100% 0, 46% 0, 59% 100%, 100% 100%);
  background: linear-gradient(-60deg, rgb(252, 148, 132), rgb(253, 185, 174));
}

.hintContent {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  right: 45px;
  top: 100px;
  width: 300px;
  height: 300px;
}

.hintText {
  color: white;
  font-size: 30px;
}

.back {
  width: 140px;
  height: 60px;
  border-radius: 30px;
  font-size: 30px;
  line-height: 60px;
  color: rgb(20, 113, 160);
  text-shadow:  0 0 2px rgb(253, 185, 174);
  box-shadow: 0 2px 8px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .04);
}

@keyframes rollbg {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>