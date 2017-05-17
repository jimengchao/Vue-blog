<template>
  <div class="wrapper">
      <!-- 菜单 -->
      <Navbar></Navbar>

      <!--主体 -->
      <div class="main-content">
        
          <Topbar></Topbar>
          <Layout></Layout>

      </div>
  </div>
</template>


<script>
import Navbar from "@/view/layout/Navbar"
import Topbar from "@/view/layout/Topbar"
import Layout from "@/view/layout/Layout"

export default {
  name: 'app',
  
  components: {
    Navbar,
    Topbar,
    Layout
  }
}
</script>

<style lang="scss">
  .wrapper{
      position: relative;
      height: 100%;
      width: 100%;
      padding-left: 180px;
  }
  .wrapper:after{
    content: "";
    display: table;
    clear: both;
  }


  .main-content{
    width: 100%;
    min-height: 100%;
    transition: all .28s ease-out;
  }
</style>
