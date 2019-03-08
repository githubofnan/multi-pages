<template>
  <div id="app">
    <span>this is login</span>
    <img alt="Vue logo" src="../../../assets/logo.png">
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib';
export default {
  mounted () {
    console.log(Lib)
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
