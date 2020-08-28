<template>
  <div>
    <div class="switchMenu" @click="switchMenu">
      <i class="el-icon-menu"></i>
    </div>
    <transition
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <div class="MenuContainer" v-if="isOpenMenu">
        <router-link v-for="(item,index) in navbarTab" :to="item.path" :key="index">
          <div
            class="MenuItem"
            :class="{active:activeTab==index}"
            @click="activeTab=index"
          >{{item.title}}</div>
        </router-link>
      </div>
    </transition>
  </div>
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
      isOpenMenu: true,
    };
  },
  methods: {
    switchMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style scoped>
.switchMenu {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  right: 75px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 25px;
  box-shadow: 0 0 4px #909399;
  color: #909399;
  cursor: pointer;
}
.switchMenu:active {
  box-shadow: none;
}
.MenuContainer {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 120px;
  right: 0;
  bottom: 0;
  width: 200px;
  background-color: transparent;
}
.MenuItem {
  width: 100%;
  height: 80px;
  margin: 20px 0;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
  transition: background .5s;
}
.MenuItem:not(.active):hover {
  background-color: #fffafa94;
  transition: none;
}
.active {
  background: url("../../../assets/img/bg/adminTabActiveBg.png") 100% 100%
  repeat;
}





</style>