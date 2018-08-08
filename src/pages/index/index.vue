<template>
  <div id="app">
    <img src="/static/img/i.jpg" width="200">
    <ul>
      <li><a href="/#/">首页</a></li>
      <li><a href="cell.html">独立单页面</a></li>
      <li><a href="/#/fade">fade</a></li>
      <li><a href="/#/zoom">zoom</a></li>
      <li><a href="/#/table">table</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
//import open from '@/components/el/alert';
export default {
  name: 'app',
  methods: {

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
