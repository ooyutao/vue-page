<template>
  <div id="app">
    <img src="/static/img/i.jpg" width="200">
    <h4 @click="open">一个提示</h4>
    <ul class="nav">
      <li><a href="#/">首页</a></li>
      <li><a href="#/table">table</a></li>
      <li><a href="cell.html">独立单页面</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
//import zoom from '@/components/el/zoom';
export default {
  name: 'app',
  methods: {
      open() {
          this.$utils.Alert(this,"一个弹层提示！","success");
      }
  }

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px;
}
  .nav{
    border: 1px solid #eee;
    margin: 30px 0;
    overflow: auto;
  }
.nav li{
  float:left;

  border-right: 1px solid #eee;
  height: 50px;
  line-height: 40px;
}
.nav li a{
  font-size: 14px;
  color: #333;
  text-decoration: none;
  padding: 5px 20px;
  display: block;
}
</style>
