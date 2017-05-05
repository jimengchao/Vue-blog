<template>
  <div class="wrapper">
      <!-- 菜单 -->
      <Navbar></Navbar>
  </div>
</template>


<script>
import Navbar from "@/view/layout/Navbar"

export default {
  name: 'app',
  components: {
    Navbar
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
</style>
