<template>
  <div class="contact">
    <el-popover placement="top-start" trigger="click" v-for="(item,index) in data" :key="index">
      <img :src="item.img" v-if="item.img" />
      <a :href="item.link" v-if="item.link">https://github.com/Leslie622</a>
      <span slot="reference">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
      </span>
    </el-popover>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      data: [
        {
          img: false,
          icon: "#icon-github",
          link: "https://github.com/Leslie622",
        },
        {
          img: require("assets/img/contact/weixinerweima.png"),
          icon: "#icon-weixin",
        },
        {
          img: require("assets/img/contact/qqerweima.png"),
          icon: "#icon-QQ",
        },
        {
          img: require("assets/img/contact/weixinerweima.png"),
          icon: "#icon-youxiang",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 40px;
  font-size: 30px;
}

.contact svg {
  opacity: 0.7;
  margin: 0 30px;
  cursor: pointer;
}
img {
  width: 200px;
}
</style>