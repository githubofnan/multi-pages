<template>
  <div id="app">
    <span>this is login</span>
    <input type="file" @change="tapUpload">
    <img alt="Vue logo" src="../../../assets/img/logo.png">
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib';
export default {
  mounted () {
    console.log(Lib)
  },
  methods: {
    async tapUpload (e) {
      e = e || window.event;
      // console.log(e.target)
      let base = await Lib.M.getBase64Image(e.target.files[0])
      console.log(base)
    }
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
