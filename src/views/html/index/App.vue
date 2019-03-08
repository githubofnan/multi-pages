<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-main>
        <img alt="Vue logo" src="../../../assets/img/logo.png">
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
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
