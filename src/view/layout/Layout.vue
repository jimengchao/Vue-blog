<template>
    <div class="wrapper">

      <!-- 菜单 -->
      <Navbar></Navbar>

      <!--主体 -->
      <div class="main-content">
          <Topbar></Topbar>
          <section class="app-main" style="min-height: 100%">
              <transition name="fade" mode="out-in">
                  <router-view :key="key"></router-view>
              </transition>
          </section>
      </div>
    </div>
        
</template>

<script>
import Navbar from "@/view/layout/Navbar"
import Topbar from "@/view/layout/Topbar"
export default {
      data() {
        return {

        }
      },
      components: {
        Navbar,
        Topbar
      },
      computed: {
        key() {
            return this.$route.name !== undefined
                        ? this.$route.name + +new Date()
                        : this.$route + +new Date()
        }
      },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .main-content{
    width: 100%;
    min-height: 100%;
    transition: all .28s ease-out;
  } 
</style>