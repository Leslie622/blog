<template>
  <div class="writeBlog">
    <transition appear enter-active-class="animate__animated animate__zoomInDown">
      <mavon-editor
        v-model="blogContent"
        class="mavonEditor"
        previewBackground="ffffff"
        codeStyle="tomorrow"
      />
    </transition>
    <transition appear enter-active-class="animate__animated animate__zoomInDown">
      <div class="blogInfo"></div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      blogContent: "",
    };
  },
};
</script>

<style scoped>
/* 编辑器样式 */
@import "~assets/css/mavon-editor-style/mavon-editor-admin.css";

.writeBlog {
  position: absolute;
  display: flex;
  top: 85px;
  right: 10px;
  left: 10px;
  bottom: 10px;
  min-width: 1800px;
}

.mavonEditor {
  flex: 8;
  border-radius: 20px;
  overflow: hidden;
}

.blogInfo {
  flex: 2;
  margin-left: 10px;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
