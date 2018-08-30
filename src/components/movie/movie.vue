<template>
    <div id="movie">
        <!-- 选项卡 -->
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">正在热映</mt-tab-item>
          <mt-tab-item id="2">即将上映</mt-tab-item>
          <mt-tab-item id="3">Top250</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
              <div class="hot">
                  <div class="content" v-for="item in data">
                      <div class="pic">
                          <img :src="item.images.large"/>
                      </div>
                      <div class="word">
                          <h3 v-text="item.title"></h3>
                          <p>年份: {{item.year}}</p>
                          <p>评分: {{item.rating.average}}</p>
                          <p>主演: <span v-for="cast in item.casts">{{cast.name + " "}}</span></p>
                          <p>类型: <span v-for="genre in item.genres">{{genre + " "}}</span></p>
                      </div>
                  </div>
              </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
              <div class='coming-soon'>
              	  即将上映
              </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
          	  <div class='top-250'>
              	  Top250
              </div>
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'movie',
        data() {
        	//数据属性
            return {
                name: 'movie',
                selected: 1,
                data: []
            }
        },
        computed: {
			//计算属性
        },
        watch: {
        	//侦听属性
        },
        created(){
        	this.loading(); // 添加加载动画
        },
        mounted() {
            this.getMovie()
        },
        methods: {
        	//方法属性
        	loading() {
	    	   this.$indicator.open({
	    	      text: '加载中...',
			      spinnerType: 'fading-circle'
        	   })
        	},
            getMovie() {
               var _this = this
               _this.$axios.get('/api/v2/movie/in_theaters')
               .then(function (response) {
                   console.log(response.data.subjects)
                   _this.data = response.data.subjects
                  
                   _this.$indicator.close() // 取消加载动画
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
	#movie .content {
		overflow: hidden;
		padding: 15px 0;
		text-align: left;
		font-size: 12px;
	}
	#movie .hot .pic,.word {
		float: left;
		max-width: 50%;
	}
	#movie .hot .pic img {
		width: 100px;
		height: 120px;
		margin-right: 15px;
	}
	#movie .hot .word h3 {
		margin-top: 0;
		margin-bottom: 15px;
	}
	#movie .hot .word p {
		margin: 5px 0;
		
		overflow : hidden;
    	text-overflow: ellipsis;/* 设置隐藏的方式 */
    	display: -webkit-box;
    	-webkit-line-clamp: 1;/* 设置超出多少行隐藏 */
    	-webkit-box-orient: vertical;
    	word-break: break-all;
	}
</style>