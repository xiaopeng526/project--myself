<template>
  <div>
    <action-frame>
      <div class="header">
        <el-row>
          <el-form ref="form" :model="form" label-width="80px">
            <el-row>
              <el-col :span="6" show-overflow-tooltip>
                <el-form-item label="车系名称"  >
                  <el-autocomplete
                    style="width:100%"
                    v-model="form.nametrain"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入车系名称"
                    @select="selectHrd"
                  ></el-autocomplete>
                </el-form-item>
              </el-col>
              <el-col :span="6" show-overflow-tooltip>
                <el-form-item label="所属品牌" >
                  <el-autocomplete
                    style="width:100%"
                    v-model="form.brand"
                    :fetch-suggestions="querySearchbrand"
                    placeholder="请输入所属品牌"
                    @select="selectHrd"
                  ></el-autocomplete>
                </el-form-item>
              </el-col>
              <el-col :span="6" show-overflow-tooltip>
                <el-form-item label="销售状态" >
                  <el-select v-model="form.salestatus" placeholder="请选择数据来源">
                    <el-option
                      v-for="item in salestatusArr"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" show-overflow-tooltip>
                <el-form-item label="显示状态" >
                  <div class="status">
                    <el-radio  v-model="form.radio" label="1">备选项</el-radio>
                    <el-radio v-model="form.radio" label="2">备选项</el-radio>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-row>
      </div>
    </action-frame>
  <content-frame>
    <div class="content">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="nametrain"
          label="车系名称"
          >

        </el-table-column>
        <el-table-column
          prop="numbermodels"
          label="车型数量"
         >

        </el-table-column>
        <el-table-column
          prop="brand"
          label="所属品牌"
         >

        </el-table-column>
        <el-table-column
          prop="salestatus"
          label="销售状态"
         >

        </el-table-column>
        <el-table-column
          prop="timemarket"
          label="上市时间(排序)"
         >

        </el-table-column>
        <el-table-column
          prop="sorting"
          label="排序"
         >

        </el-table-column>
        <el-table-column
          prop="displaystatus"
          label="显示状态"
         >

        </el-table-column>
        <el-table-column  width='180' label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              class="add"
              size="mini"
              type="text"
            >添加车型</el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </content-frame>

  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        nametrain:"",
        brand:"",
        salestatus:"",
        radio:""
      },
      salestatusArr: [
        {
          value: 1,
          label: "在售"
        },
        {
          value: 2,
          label: "停售"
        }
      ],
      tableData:[
        {
          nametrain:"凯美瑞",
          numbermodels:"10",
          brand:"广汽丰田",
          salestatus:"在售",
          timemarket:"2006/10/10",
          sorting:"99",
          displaystatus:"显示"

        },
        {
          nametrain:"汉兰达",
          numbermodels:"10",
          brand:"广汽丰田",
          salestatus:"在售",
          timemarket:"2006/10/11",
          sorting:"98",
          displaystatus:"显示"

        }
      ]
    }
  },
  methods:{
    querySearchAsync(){

    },
    selectHrd(){

    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    querySearchbrand(){

    }
  },
  components: {
    "action-frame": () => import("@/components/ActionFrame/index.vue"),
    "content-frame": () =>
      import("@/components/ContentFrame/index.vue")
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
