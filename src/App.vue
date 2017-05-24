<template>
  <div>

      <router-view></router-view>

  </div>
</template>


<script>


export default {
  name: 'app',
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
