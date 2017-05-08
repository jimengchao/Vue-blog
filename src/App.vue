<template>
  <div class="wrapper">
      <!-- 菜单 -->
      <Navbar></Navbar>

      <!--主体 -->
      <div class="main-content">
        
          <Topbar></Topbar>
          <section class="app-main" style="min-height: 100%">
              <transition name="fade" mode="out-in">
                  <router-view></router-view>
              </transition>
          </section>

      </div>
  </div>
</template>


<script>
import Navbar from "@/view/layout/Navbar"
import Topbar from "@/view/layout/Topbar"

export default {
  name: 'app',
  components: {
    Navbar,
    Topbar
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
