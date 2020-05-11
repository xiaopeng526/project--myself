<template>
  <div class="tag">
    <el-tag
      :key="index"
      v-for="(tag,index) in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
  import {
    PATH_PROMOTION_MY,
    PATH_PROMOTION_TEAM
  } from "@/constants/URL";
  export default {
    props:{

      dynamicTags:{
        type:''
      },
    },
    data() {
      return {
        tabIndex: 1,
        isCollapse:false
      }
    },
    methods: {
      //点击tag，跳转
      handleClose(tag){
      this.$emit("removetag",tag)
      }

    },
  }
</script>

<style lang="scss" scoped>
  .tag{background: #ff6b01;height:42px; display:flex;align-items: center}
  .el-tag{
    background: #fff
  }
  .el-tag + .el-tag {
    margin-left: 10px;

  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
</style>
