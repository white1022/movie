<template>
    <div id="search">
        <mt-search autofocus v-model="value" cancel-text="取消" placeholder="搜索">
    		
            	<mt-cell v-for="item in data" :title="item.title" :value="item.value">
            		
            	</mt-cell>
            
		</mt-search>		
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                value: '', 
                data: []
            }
        },
        mounted() {       	
        	
        },
        methods: {
        	searchData() {
        	  debugger
        	  var _this = this
              _this.$axios.get('/api/v2/movie/search?q={'+_this.value+'}')
              .then(function (response) {
                console.log(response)
                //_this.data = response.data.subjects
              })
              .catch(function (error) {
                console.log(error)
              })
        	}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #search {
  	height: 100%;
  }
</style>