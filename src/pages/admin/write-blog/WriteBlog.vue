<template>
  <div class="writeBlog">
    <transition appear enter-active-class="animate__animated animate__zoomInDown">
      <mavon-editor
        v-model="blogData.blogContent"
        class="mavonEditor"
        previewBackground="ffffff"
        codeStyle="tomorrow"
        ref="md"
      />
    </transition>
    <transition appear enter-active-class="animate__animated animate__zoomInDown">
      <div class="sidebar">
        <div class="operation">
          <div class="save btn">保存草稿</div>
          <div class="issue btn" @click="issue">发布博客</div>
        </div>
        <div class="blogTitleContent">
          <input type="text" class="blogTitleInput" v-model="blogData.blogTitle" />
          <div class="hintText">博客标题</div>
        </div>
        <div class="blogTags">
          <el-select
            class="selectTag"
            v-model="blogData.blogTags"
            multiple
            filterable
            allow-create
            placeholder="请选择或输入"
            default-first-option
            @visible-change="hintTextAnimation = !hintTextAnimation"
          >
            <el-option v-for="item in tags" :key="item.value" :value="item.value"></el-option>
          </el-select>
          <div class="hintText" :class="hintTextAnimation?'hintTextAnimation':''">博客标签</div>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
import { formatDateTime, deepClone } from "common/utils";

export default {
  name: "",
  data() {
    return {
      blogData: {
        blogTitle: "",
        blogContent: "",
        blogTags: "",
        blogPutoutDate: "",
      },
      tags: [
        {
          value: "HTML",
        },
        {
          value: "CSS",
        },
        {
          value: "JavaScript",
        },
        {
          value: "Vue",
        },
        {
          value: "Webpack",
        },
      ],
      blogDataList: [],
      hintTextAnimation: false,
    };
  },
  methods: {
    issue() {
      this.blogData.blogContent = this.$refs.md.d_render;
      console.log(this.$refs.md.d_render);
      this.blogData.blogPutoutDate = formatDateTime(new Date());
      let blogData = deepClone(this.blogData);
      this.blogDataList.push(blogData);
      localStorage.setItem("blogDatas", JSON.stringify(this.blogDataList));
    },
  },
};
</script>

<style scoped>
/* 编辑器样式 */
@import "~assets/css/mavon-editor-style/mavon-editor.css";

@import "~assets/css/ele-style/admin/admin-writeBlog-select.css";

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

.sidebar {
  flex: 2;
  margin-left: 10px;
  border-radius: 20px;
  font-family: 幼圆;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.4);
}

.operation {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;
  padding: 0 20px;
}

.operation .btn {
  width: 40%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 50px;
  box-shadow: 3px 3px rgb(161, 160, 160);
  cursor: pointer;
}

.operation .btn:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}

.save {
  background-color: rgba(220, 220, 220, 0.712);
}

.issue {
  background-image: url("../../../assets/img/bg/adminTabActiveBg.png");
  transition: background 0.2s;
}

.issue:hover {
  background: url("../../../assets/img/bg/adminTabActiveBg.png") 100% 100%
    repeat;
}

.blogTitleContent,
.blogTags {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column-reverse;
  padding: 10px 0;
}

.hintText {
  display: block;
  padding: 20px 20px;
  font-size: 22px;
  text-align: start;
  transition: all ease-out 0.4s;
}

.blogTitleInput {
  width: 85%;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
  outline: none;
}

.blogTitleInput:focus + .hintText {
  transform: translateX(105px);
}

.hintTextAnimation {
  transform: translateX(105px);
}
</style>
