<template>
    <div id="mine">
        <h1>{{name}}</h1>
        <h1>{{userkey}}</h1>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'mine',
        data() {
            return {
                name: 'mine',
                userkey: null
            }
        },
        created() {
        	this.checkLogin()
        },
        mounted() {
        	
        },
        methods: {
        	checkLogin() {
        		var _this = this
        		
        		if ($.cookie('userkey') != null && $.cookie('userkey') != '') {
        			_this.userkey = $.cookie('userkey')
        			
        			
        			
        		} else{
        			_this.$router.push({ path: '/login' })
        		}
        	}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>