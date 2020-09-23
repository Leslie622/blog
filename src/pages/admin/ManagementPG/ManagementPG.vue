<template>
  <div class="ManagementPG">
    <div class="articleCategor">
      <el-table :data="tableData" style="width: 100%" class="CategorTable">
        <el-table-column label="分类名称" width="160">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{scope.row.name}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="文章ID" width="160">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{scope.row.id}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="redact(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="addCategory" @click="addCategory">新增分类</div>
    </div>
    <div class="article"></div>
  </div>
</template>
 
<script>
import {
  openRemovePG,
  openRedactPG,
  openAddPG,
  requestAllData,
} from "common/utils";

import { request } from "../../../network/request";

export default {
  name: "ManagementPG",
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.requestAllData();
  },
  methods: {
    openRedactPG,
    openRemovePG,
    openAddPG,
    //请求全部数据
    requestAllData() {
      request({
        method: "get",
        url: "/blog/category/query",
      }).then((res) => {
        this.tableData = res.data.data;
      });
    },
    //编辑
    redact(index, row) {
      this.openRedactPG(index, row);
    },
    //删除
    deleteRow(index, rows) {
      this.openRemovePG(index, rows);
    },
    //添加
    addCategory() {
      this.openAddPG();
    },
  },
};
</script>

<style scoped>
@import "~assets/css/ele-style/admin/admin-managementPG-table.css";
@import "~assets/css/ele-style/admin/admin-message-box.css";

.ManagementPG {
  position: absolute;
  display: flex;
  top: 85px;
  right: 10px;
  left: 10px;
  bottom: 10px;
}

.article {
  flex: 1;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}
.articleCategor {
  display: flex;
  justify-content: center;
  min-width: 520px;
  margin-right: 10px;
  border-radius: 20px;
  font-family: 幼圆;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
}

.addCategory {
  position: absolute;
  bottom: 40px;
  width: 150px;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  line-height: 60px;
  box-shadow: 4px 4px rgb(179, 179, 179);
  background-image: url("~assets/img/bg/adminTabActiveBg.png");
  cursor: pointer;
}

.addCategory:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}
</style>