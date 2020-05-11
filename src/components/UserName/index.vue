<template>
  <div class="user-name-component">
    <el-button class="btn-feedback" @click="feedbackVisible = true">
      <span>问题反馈</span>
    </el-button>
    <img class="avatar" :src="avatar" alt />
    <span>你好, {{ name }}</span>
    <el-button class="logout" @click="outLogin" type="text">退出</el-button>
    <el-drawer size="100" :visible.sync="feedbackVisible" direction="rtl">
      <iframe
        id="feeback"
        v-if="feedbackVisible"
        class="feedbackpage"
        :src="feedbackURL"
        frameborder="0"
      ></iframe>
    </el-drawer>
  </div>
</template>
<script>
// import { logOut } from "@/constants/API";
import { PATH_LOGIN } from "@/constants/URL";
// import defaultAvatar from "@/assets/img/avatar_default.jpg";
// import { LSKEYS } from "@/constants/KEY";
import { isPC } from "@/untils/ding";
// import Drawer from "vue-simple-drawer";

export default {
  data() {
    return {
      workcode:'111',
      // workcode: this.$ls.get(LSKEYS.workcode, "null"),
      constants: {

      },
      isPC: isPC(),
      feedbackVisible: false
    };
  },
  computed: {
    name() {
      return this.$store.state.user.username;
      // return this.$ls.get(LSKEYS.username);
    },
    avatar() {
      return 1;
      // return this.$ls.get(LSKEYS.avatar, null)
      //   ? `${this.$ls.get(LSKEYS.avatar)}_36x36.jpg`
      //   : defaultAvatar;
    },
    feedbackURL() {
      // return (
      //   "https://feedback.100tal.com/product/edceaf8ba4fb49a489200e549bb39172/" +
      //   this.workcode
      // );
    }
  },
  methods: {
    outLogin() {
      this.$store.commit("user/outLogin")
      this.$router.replace(PATH_LOGIN);
      // logOut().then(res => {
      //   this.clear();
      //   window.location.href = PATH_ZHIYINLOU;
      // });
    },
    clear() {
      // this.$ls.clear();
    }
  }
};
</script>
<style lang="scss" scoped>
  .feedbackpage {
    height: calc(100% - 20px);
    color: white;
    padding: 20px;
  }

  .user-name-component {
    background: white;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0.17px;
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .logout {
      margin-left: 10px;
    }
    .btn-feedback {
      margin-right: 15px;
      padding: 10px;
      font-size: 13px;
      color: #ff6b01;
      letter-spacing: 0.16px;
      background: #fbfbfb;
      border: 1px solid #e2e2e2;
      border-radius: 14px;
      & ::v-deep span {
        display: flex;
        align-items: center;
        & img {
          margin-right: 5px;
        }
      }
    }
    .btn-logout {
      margin-left: 17px;
    }
  }
</style>
