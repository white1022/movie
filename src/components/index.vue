<template>
  <div id="index">

    <!-- 顶部 -->
    <H-header :title="title"></H-header>

    <!-- 内容 -->
    <router-view></router-view>

    <!-- 底部 -->
    <F-footer @get-title="get_title"></F-footer>

  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      title: ''
    }
  },
  mounted() {
		
  },
  computed: {
  	
  },
  watch: {
		//如果 `title` 发生改变，这个函数就会运行
//  title() {
//			this.title = this.$route.params.title
//	}
  },
  methods: {
		get_title(data) {
			 //alert(data)
			 this.title = data
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #index {
    margin: 0;
    padding: 0;
    margin-top: 40px;
  }
</style>
