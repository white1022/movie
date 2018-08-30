<template>
  <div id="app">
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <!--<router-link to="/left">Left</router-link>-->
    <!--<router-link to="/right">Right</router-link>-->
    <!-- 对应的组件内容渲染到router-view中 -->
    <!-- <router-view name="Header"></router-view> -->
    <router-view></router-view>
    <!-- <router-view name="Footer"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
