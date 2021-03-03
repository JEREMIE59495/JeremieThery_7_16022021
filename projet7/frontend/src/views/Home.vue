<template>
  <div class="hello">
    <Headers class="header"/>
    <img alt="logo groupomania" src="../assets/icon-left-font-monochrome-black.png">
  </div>
</template>

<script>
import Headers from '@/components/Header.vue'
export default {
  name: 'Interface',
 components:{
   Headers
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  height:30em;
  margin-left: auto;
  margin-right: auto;
}
.header{
  float: right;
  margin-right: 1em;
}
</style>
