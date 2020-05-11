<template>
  <div>
    <action-frame>
      <el-row>
        <el-col :span="18" align="middle">
          <p>jhjkhbjks</p>
        </el-col>
        <el-col :span="6" align="middle" justify="end">
          <el-button type="primary">保存</el-button>
          <el-button type="primary">提交</el-button>
        </el-col>
      </el-row>
    </action-frame>
    <userInfo></userInfo>
    <applyInfo></applyInfo>
    <!-- <EduInfo></EduInfo> -->
    <TALResume></TALResume>
    <OtherResume></OtherResume>
  </div>
</template>
<script>
export default {
  components: {
    "action-frame": () => import("@/components/common/ActionFrame/index.vue"),
    userInfo: () => import("../components/module/details/BasicInfo/index.vue"),
    applyInfo: () => import("@/components/module/details/ApplyInfo/index.vue"),
    // EduInfo: () => import("../components/module/EduInfo/index.vue"),
    TALResume: () => import("../components/module/details/TALResume/index.vue"),
    OtherResume: () =>
      import("../components/module/details/OtherResume/index.vue")
  }
};
</script>
