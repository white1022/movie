<template>
    <div id="status_404">
        <h1>{{name}}</h1>
        <mt-button type="danger" @click.native="backHome">返回首页</mt-button>
        <mt-button type="primary" @click.native="previousPage">上一页</mt-button>
    </div>
</template>

<script>
    export default {
        name: 'status_404',
        data() {
            return {
                name: '404'
            }
        },
        mounted() {
        },
        methods: {
        	backHome() {
        		this.$router.push({ path: '/' })
        	},
        	previousPage() {
        		this.$router.go(-1)
        	}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#status_404 {
		/*background:url(../../assets/images/404.png) no-repeat fixed center auto;*/
	}
</style>