<template>
    <div class="sidebar-wrapper">
          <el-menu mode="vertical" class="el-menu-vertical-demo" theme="dark" :default-active="$route.path">

              <router-link class="title-link" to="article">
                <el-menu-item index="/article" ><i class="el-icon-document"></i>文章管理</el-menu-item>
              </router-link>
              <el-menu-item index="2"><i class="el-icon-menu"></i>分类管理</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-message"></i>留言管理</el-menu-item>
              <el-menu-item index="4"><i class="el-icon-information"></i>评论管理</el-menu-item>

        </el-menu>
    </div>
</template>
  

<script>
export default {
  name: 'nav',
  methods: {
     
  }
}
</script>


<style lang="scss" scoped>
 @import "src/styles/mixin.scss";

.sidebar-wrapper{
  width: 180px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow: auto;
  background-color: #324157;
  
  @include scrollBar;

  .el-menu{
    border-radius: 0;
  }

}



</style>
