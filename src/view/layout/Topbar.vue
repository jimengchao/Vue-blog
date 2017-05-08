<template>

<div class="top-bar">
    <levelbar></levelbar>
</div>


</template>

<script>
    import Levelbar from './Levelbar';

    export default {
      components: {
        Levelbar,
      },
      data() {
        return {
          
        }
      }
    }
</script>

<style lang="scss" scoped>
    .top-bar{
        background-color: #eef1f6;
    }
</style>