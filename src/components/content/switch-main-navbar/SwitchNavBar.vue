<template>
  <div class="SwitchNavBarBtn" :class="{active:isActive}" @click="SwitchNavBar">
    <div class="wrapper">
      <span class="Switchicon"></span>
      <span class="Switchicon"></span>
      <span class="Switchicon"></span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    SwitchNavBar() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.SwitchNavBarBtn {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  border-radius: 50%;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22), 0 0 6px rgba(0, 0, 0, 0.1);
}


.SwitchNavBarBtn .Switchicon {
  display: block;
  padding: 4px 0;
  transition: all 0.2s ease;
}

.SwitchNavBarBtn .Switchicon::before {
  content: "";
  display: block;
  height: 2px;
  width: 30px;
  background-color: #fff;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  transition: transform 0.2s ease 0.1s, background-color 1.5s ease;
}

.active .Switchicon::before {
  background-color: black;
}

.active .Switchicon:nth-child(1)::before {
  transform: rotate(45deg);
}

.active .Switchicon:nth-child(3)::before {
  transform: rotate(-45deg);
}

.active .Switchicon:nth-child(1) {
  transform: translateY(10px);
}

.active .Switchicon:nth-child(2) {
  transition: none;
  opacity: 0;
}

.active .Switchicon:nth-child(3) {
  transform: translateY(-10px);
}
</style>