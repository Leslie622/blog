<template>
  <div class="navCategory">
    <router-link v-for="(item,index) in pathList" :to="item.path" :key="index" class="routerLink">
      <div>{{item.name}}</div>
    </router-link>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      pathList: [
        { path: "/home", name: "Home" },
        { path: "/mainblog", name: "Blog" },
        { path: "diary", name: "Diary" },
        { path: "mark", name: "Mark" },
      ],
    };
  },
};
</script>

<style scoped>
.navCategory {
  position: absolute;
  top: 250px;
  right: 45px;
  font-family: CabinSketch;
  font-size: 28px;
}
.routerLink {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 70px;
  padding: 10px 0;
  text-align: center;
  line-height: 70px;
  color: black;
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%, 10% 0);
}

.routerLink::before {
  content: "";
  width: 0%;
  height: 2px;
  background-color: rgb(216, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  transition: all 0.5s;
}

.routerLink:not(.router-link-exact-active):hover::before {
  color: rgb(216, 0, 0);
  width: 50%;
}

.routerLink.router-link-exact-active {
  color: rgb(216, 0, 0);
}
</style>