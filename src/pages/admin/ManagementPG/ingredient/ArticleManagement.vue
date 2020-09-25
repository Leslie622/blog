<template>
  <div class="articleList">
    <el-table :data="articleList" style="width: 100%" class="CategorTable">
      <el-table-column label="文章标题" width="490">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.title }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="发布时间" width="300">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.create_time }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="文章ID" width="300">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.id }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240">
        <template slot-scope="scope">
          <el-button size="mini" @click="redact(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="viewTheCategory(scope.$index, scope.row)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
 
<script>
import { request } from "network/request";
import { articleCategoryFilter } from "common/utils";

export default {
  name: "",
  data() {
    return {
      articleList: null,
      cate_ID: "",
    };
  },
  created() {
    request({
      method: "get",
      url: "/blog/category/query",
    }).then((res) => {
      this.cate_ID = res.data.data[0].id;
    });
    request({
      method: "get",
      url: "/blog/query?user_id=8&pageNum=1&pageSize=10",
    }).then((res) => {
      this.articleList = articleCategoryFilter(res.data.data, this.cate_ID);
      console.log(this.articleList);
    });
  },
  mounted() {
    this.viewTheCategory();
  },
  methods: {
    viewTheCategory() {
      this.$bus.$on("viewTheCategory", (cateID) => {
        this.cate_ID = cateID;
        request({
          method: "get",
          url: "/blog/query?user_id=8&pageNum=1&pageSize=10",
        }).then((res) => {
          this.articleList = articleCategoryFilter(res.data.data, this.cate_ID);
        });
      });
    },
  },
};
</script>

<style scoped>
.articleList {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}

.articleItem {
  width: 80%;
  height: 40px;
  margin-top: 20px;
  background-color: aquamarine;
}
</style>