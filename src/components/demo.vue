<template>
  <div class="login">
    <div><h1>{{ head }}</h1></div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="year"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="alt"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      head: 'login',
      tableData:[{
        year: '2016-05-01',
        title: '王小虎',
        alt: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  beforeCreate() {
    // 可以在这加个loading事件
  },
  created() {
  	// 在这结束loading，还做一些初始化，实现函数自执行
  	this.$indicator.open('加载中...');
    console.log('head is ' + this.head)  	
  },
  beforeMount() {

  },
  mounted() {
  	// 在这发起后端请求，拿回数据，配合路由钩子做一些事情
    this.getMovie(); 
  },  
  beforeUpdate() {

  },
  updated() {

  }, 
  beforeDestroy() {
  	// 你确认删除XX吗？
  },  
  destroyed() {
  	// 当前组件已被删除，清空相关内容
  }, 
  methods: {
    demo() {
      this.head = this.head.split('').reverse().join('')
    },
    getMovie() {    
      //用 this.$axios 代替 axios
      var _this = this  
      _this.$axios.get('/api/movie/in_theaters')
      .then(function (response) {
        _this.tableData = response.data.subjects
        console.log(_this.tableData)
      })
      .catch(function (error) {
        console.log(error)
      }); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
