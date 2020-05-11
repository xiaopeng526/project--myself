<template>
  <el-container class="container" style="height:100%;">
    <el-aside :class="{ isCollapse }" class="sidebar-container">
      <div class="logo-section">
        <img src="@/assets/img/logo.png" alt style="width: 49px;
        height: 49px;" />
        <div class="sys-name">人才晋升系统</div>
      </div>
      <router-view :isCollapse="isCollapse" name="sidebar" @getColumnName="getColumnName($event)"></router-view>
    </el-aside>
    <el-container class="content-container">
      <el-header style="padding-left:0;">
        <el-row style="height:100%;" type="flex" justify="space-between">
          <hamburger
            :isActive="!isCollapse"
            @toggleClick="isCollapse = !isCollapse"
          ></hamburger>
          <user-name></user-name>
        </el-row>
      </el-header>


      <!--tag标签-->
      <tag-nav :dynamicTags="editableTabs" @removetag="removetag" ></tag-nav>



      <el-main class="main-container">
        <transition appear name="fade" mode="out-in">
          <keep-alive :include="['list']">
            <router-view :key="$route.path"></router-view>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
    <back-to-top
      v-if="isBackShow"
      selector=".main-container"
      :custom-style="myBackToTopStyle"
      :visibility-height="300"
      transition-name="fade"
    />
  </el-container>
</template>

<script>
  import {
    PATH_PROMOTION_MY,
    PATH_PROMOTION_TEAM
  } from "@/constants/URL";
  import BackToTop from "@/components/BackToTop";
  import tagNav from "@/components/tagNav";
  export default {
    data() {
      return {
        val: 1,
        isCollapse: false,
        myBackToTopStyle: {
          right: "50px",
          bottom: "50px",
          width: "40px",
          height: "40px",
          "border-radius": "4px",
          "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
          background: "#e7eaf1" // 按钮的背景颜色 The background color of the button
        },
        isBackShow: document.body.scrollTo,

        editableTabs: [{
          title: '我的晋升',
          name: '我的晋升',
          content: PATH_PROMOTION_MY
        }],
      };
    },
    components: {
      "user-name": () => import("@/components/UserName/index.vue"),
      hamburger: () => import("@/components/Hamburger"),
      BackToTop,
      tagNav
    },
    methods: {
      getColumnName(e){
        this.addTag(e.title,e.url)
      },

      //点击导航栏，传入对象信息
      addTag(targetName,routers) {
        // console.log(this.editableTabs);
       let ab=this.editableTabs.map(item=>item.name)
        if(!ab.includes(targetName)){
          this.editableTabs.push({
            title:targetName,
            name:targetName,
            content:routers
          })
        }
      },
      removetag(tag){
        // console.log( this.editableTabs);
        this.editableTabs.splice(this.editableTabs.indexOf(tag), 1);
        if(!this.editableTabs.length){
          this.editableTabs=[{
            title: '我的晋升',
            name: '我的晋升',
            content: PATH_PROMOTION_MY
          }]
        }
        let url=  this.editableTabs?this.editableTabs[this.editableTabs.length-1].content:PATH_PROMOTION_MY
        this.$router.push(url)
      }

    }
  };
</script>
<style lang="scss" scoped>
  .sidebar-container {
    background-color: #30333c;
    height:700px;
    max-width: 180px !important;
    overflow: scroll;

    &.isCollapse {
      width: auto !important;
      .sys-name {
        display: none;
      }
      .logo-section {
        & ::v-deep img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  .sidebar-container ::v-deep .el-menu {
    border-right-width: 0px;
  }
  .container {
    height: 100%;
    .logo-section {
      padding: 15px 0;
      text-align: center;
    }
    .sys-name {
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0.17px;
      margin-top: 15px;
    }
    .content-container {
      background: white;
      overflow: auto;
    }
  }
  .main-container {
    background-color: rgb(237, 242, 245);
    padding: 0;
    height: 100%;
    // min-width: 1050px;
    // overflow: auto;
    width: 100%;
  }
</style>
