<template>
  <transition appear enter-active-class="animate__animated animate__zoomInDown">
    <div class="adminNavbar">
      <div class="MenuContainer">
        <router-link v-for="(item,index) in navbarTab" :to="item.path" :key="index">
          <div
            class="MenuItem"
            :class="{active:activeTab==index}"
            @click="activeTab=index"
          >{{item.title}}</div>
        </router-link>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      activeTab: 0,
      navbarTab: [
        { title: "写博客", path: "/admin.html/writeblog" },
        { title: "写日记", path: "/admin.html/writediary" },
      ],
    };
  },
};
</script>

<style scoped>
.adminNavbar {
  position: fixed;
  top: 10px;
  right: 10px;
  left: 10px;
  min-width: 1800px;
  height: 65px;
  padding: 0 100px;
  border-radius: 20px;
  font-family: ios7;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
  background-color: rgba(255, 255, 255, .4);
}

.MenuContainer {
  display: flex;
}

.MenuContainer a {
  margin: 0 30px;
}

.MenuItem {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 55px;
  cursor: pointer;
  clip-path: polygon(0% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%);
  transition: all .3s;
}

.MenuItem:not(.active):hover {
  background-color: #fffafa;
}

.active {
  background: url("../../../assets/img/bg/adminTabActiveBg.png") 100% 100%
  repeat;
}
</style>