<template>
    <div id="login">
        <div id="logo">
	        <img src="../../assets/images/logo.png" alt=""/>
	    </div>
	    <a class="login_btn" @click="jump('to_login')">登&nbsp;&nbsp;录</a>
	    <a class="login_btn" @click="jump('to_register')">新&nbsp;&nbsp;手&nbsp;&nbsp;注&nbsp;&nbsp;册</a>
	    <div class="other_login">
	        <div class="other"></div>
	        <span>其他方式登录</span>
	        <div class="other"></div>
	    </div>
	    <div class="other_choose">
	        <a href="#">
	            <img src="../../assets/images/qq.png" alt="QQ登陆"/>
	        </a>
	        <a href="#">
	            <img src="../../assets/images/wx.png" alt="微信登陆"/>
	        </a>
	        <a href="#">
	            <img src="../../assets/images/wb.png" alt="微博登陆"/>
	        </a>
	    </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'login',
        data() {
            return {
                name: 'login',
                userkey: null
            }
        },
        created() {
        
        },
        mounted() {
        	//this.setCookie("qqqw", "aqw")
        },
        methods: {
        	jump(name) {
        		this.$router.push({ name: name})
        	},
        	setCookie(cookie_name, cookie_val) {
        		//debugger
        		var cookie_time = new Date() 
				cookie_time.setTime(cookie_time.getTime() + (60 * 60 * 1000)) //coockie保存一小时 
				$.cookie(cookie_name, cookie_val, {
					expires: cookie_time, //有效期,单位是天
				    path: '/' //cookie的路径
				})
        	},
        	getCookie(cookie_name) {
        		return $.cookie(cookie_name)
        	},
        	delCookie(cookie_name) {
        		$.cookie(cookie_name, null, {path: '/'})
        	}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    text-decoration: none;
    color:#374782;
}
input{
    outline: none;
}	
#login{
    width:100%;
    min-height: 100%;
    text-align: center;
    background: #e0ebf4;
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;
}
#logo{
    margin: 9% auto;
    width: 30.25%;
}
img{
    width: 100%;
}
form{
    width: 80%;
    margin: 0 auto;
    text-align: left;
}
form div.userName,form div.passWord{
    border: 1px solid #c1c1c1;
    padding:3.5% 0 4% 3%;
    height: 22%;
    background: #ffffff;
}
form div.userName{
    border-bottom:0;
    -webkit-border-top-left-radius: 0.45em;
    -webkit-border-top-right-radius: 0.45em;
    -moz-border-radius-topleft: 0.45em;
    -moz-border-radius-topright: 0.45em;
    border-top-left-radius: 0.45em;
    border-top-right-radius: 0.45em;
}
form div.passWord{
    -webkit-border-bottom-left-radius: 0.45em;
    -webkit-border-bottom-right-radius: 0.45em;
    -moz-border-radius-bottomleft: 0.45em;
    -moz-border-radius-bottomright: 0.45em;
    border-bottom-left-radius: 0.45em;
    border-bottom-right-radius: 0.45em;
}
form div.userName input,form div.passWord input{
    width: 68%;
    height: 80%;
    border:none;
    background: transparent;
    font-size: 1em;
    font-family: "Microsoft YaHei";
    color: #b3b3b3;
    letter-spacing: 1px;
    padding-left: 2px;
}
.choose_box{
    height: 4.5em;
    line-height: 4.5em;
    padding: 0 5px;
}
.choose_box div{
    float: left;
}
.choose_box a{
    float: right;
}
.login_btn{
    width: 100%;
    display: block;
    padding:3% 0 ;
    background: #ffffff;
    border: 0;
    font-size: 1em;
    font-family: "Microsoft YaHei";
    color:#374782;
    -webkit-box-shadow: #8f9bad 0px 0px 20px;
    -moz-box-shadow: #8f9bad 0px 0px 20px;
    box-shadow: #8f9bad 0px 0px 20px;
    text-align: center;
}
.other_login{
    width: 80%;
    height: 15px;
    position: absolute;
    top:75%;
    margin: 0 10%;
}
.other_login .other,.other_login span{
    display: inline-block;
    vertical-align: middle;
}
.other_login .other{
    width: 28%;
    height: 8px;
    border-bottom:1px solid #2f2c59;
}
.other_login span{
    width:40%;
}
.other_choose{
    width: 74%;
    top:83.5%;
    position: absolute;
    margin: 0 13%;
}
#login .other_choose a{
    display: block;
    float: left;
    border: 2px solid #505887;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
}
.other_choose a:nth-child(2) {
    left:42%;
}
.other_choose a:nth-child(3) {
    left:80%;
}
.other_choose a img{
    width: 60%;
    padding: 14% 0;
}
#login{
    background: #ffffff;
}
.login_btn{
    width: 80%;
    margin: 10%;
}
.other_login{
    top: 70%;
}
.other_choose{
    top: 80%;
}
</style>