<template>
  <div id="header">
    <!--<h1>{{name}}</h1>-->
    <!-- 顶部 -->
    <mt-header fixed :title="title">

      <div slot="left">
        <mt-button @click="toBack" icon="back">返回</mt-button>
      </div>

      <div slot="right">
        <mt-button @click="toSearch" icon="search"></mt-button>
      </div>

    </mt-header>
  </div>
</template>

<script>
    export default {
        name: 'H-header',
        data() {
            return {
                name: 'header'
            }
        },
        mounted() {
        },
        props: {
	        	title: {
	        		type: String, // 类型检测
	        		default: '', // 设置默认值
	      			required: true // 是否必传
	        	}
        },
        methods: {
          	toBack: function(){
          		this.$router.go(-1)
          	},
          	toSearch: function(){
          		this.$router.push({name: 'search'})
          	}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
