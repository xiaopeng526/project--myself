<template>
  <el-menu
    :collapse="isCollapse"
    :default-openeds="defaultOpeneds"
    class="menu-list"
    :default-active="$route.path"
    background-color="#30333C"
    text-color="white"
    active-text-color="#969798"
    unique-opened
    router
  >
    <el-menu-item
      v-waves
      v-if="canRoleManage"
      :index="constants.PATH_PROMOTION_MY"
      @click="getIcon({title:'我的晋升',url:constants.PATH_PROMOTION_MY})"
    >
      <img v-if="myIndex" src="@/assets/img/my.svg" alt="" />
      <img v-else src="@/assets/img/my_after.svg" alt="" />
      <span class="icon-style">我的晋升</span>
    </el-menu-item>
    <el-menu-item
      v-waves
      v-if="canRoleManage"
      :index="constants.PATH_PROMOTION_TEAM"
      @click="getIcon({title:'团队晋升',url:constants.PATH_PROMOTION_TEAM})"
    >
      <img v-if="teamIndex" src="@/assets/img/team.svg" alt="" />
      <img v-else src="@/assets/img/team_after.svg" alt="" />
      <span class="icon-style">团队晋升</span>
    </el-menu-item>
    <el-menu-item
      v-waves
      v-if="canRoleManage"
      :index="constants.PATH_PROMOTION_MY_APPROVAL"
      @click="getIcon({title:'我的审批',url:constants.PATH_PROMOTION_MY_APPROVAL})"
    >
      <img v-if="myApprovalIndex" src="@/assets/img/my_approval.svg" alt="" />
      <img v-else src="@/assets/img/my_approval_after.svg" alt="" />
      <span class="icon-style">我的审批</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { USER_MANAGE, ACCESS_SETTING, ROLE_MANAGE } from "@/constants/TEXT";
import {
  PATH_PROMOTION_MY,
  PATH_PROMOTION_TEAM,
  PATH_PROMOTION_MY_APPROVAL
} from "@/constants/URL";

import { LSKEYS } from "@/constants/KEY";
// import my from "@/assets/img/my.svg";

export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      defaultOpeneds: [PATH_PROMOTION_MY],
      constants: {
        PATH_PROMOTION_MY,
        PATH_PROMOTION_TEAM,
        PATH_PROMOTION_MY_APPROVAL
      },
      myIndex: true,
      teamIndex: true,
      myApprovalIndex:true,
    };
  },
  methods: {
    getIcon(val) {
      switch (val.url) {
        case "/my":
          this.myIndex = false;
          this.teamIndex = true;
          this.myApprovalIndex = true;
          break;
        case "/team":
          this.myIndex = true;
          this.teamIndex = false;
          this.myApprovalIndex = true;
          break;
        case "/myApproval":
          this.myIndex = true;
          this.teamIndex = true;
          this.myApprovalIndex = false;
          break;
      }
      this.$emit('getColumnName',{title:val.title,url:val.url})
    }
  },
  computed: {
    roleManager() {
      return 1;
      // return this.$ls.get(LSKEYS.permissions, []).includes(401);
    },
    userManager() {
      return 1;
      // return this.$ls.get(LSKEYS.permissions, []).includes(402);
    },
    departmentManager() {
      return 1;
      // return this.$ls.get(LSKEYS.permissions, []).includes(403);
    },
    hrbpManager() {
      return 1;
      // return this.$ls.get(LSKEYS.permissions, []).includes(404);
    },
    promotionListManager() {
      return 1;
      // return this.$ls.get(LSKEYS.permissions, []).includes(101);
    },
    juryListManager() {
      return 1;
      // return this.$ls.get(LSKEYS.permissions, []).includes(301);
    },
    canRoleManage() {
      return 1;
      // return this.permission.includes(201);
    },
    canUserManage() {
      return 1;
      // return this.permission.includes(202);
    },
    canSeeFlow() {
      return 1;
      // return this.permission.includes(401);
    },

    canSeeStock() {
      return 1;
      // return this.permission.includes(502);
    }
  }
};
</script>

<style  scoped>
  .menu-list ::v-deep .el-menu-item {
    position: relative;
    padding-left: 26px !important;
  }
  .menu-list {
    transition: width 0s;
    border-right: none;
  }
  .menu-list ::v-deep .el-menu-item:hover::after,
  .menu-list ::v-deep .el-menu-item.is-active::after {
    position: absolute;
    content: "";
    width: 4px;
    left: 0;
    top: 0px;
    background-color: rgb(76, 233, 195);
    height: 100%;
  }
  .access-style {
    margin-left: 7px;
  }
  .icon-style {
    margin-left: 10px;
  }

</style>
