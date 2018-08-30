<template>
    <div id="footer">
        <!--
        <router-link :to="{ path: 'movie', params: { title: '电影' }}">电影</router-link>
        <router-link :to="{ path: 'cinema', params: { title: '影院' }}">影院</router-link>
        <router-link :to="{ path: 'collection', params: { title: '收藏' }}">收藏</router-link>
        <router-link :to="{ path: 'mine', params: { title: '我的' }}">我的</router-link>
        -->
        <div class="content">
            <div @click="jump('movie','电影')">
              <img :src="img_movie_0">
              <p>电影</p>
            </div>

            <div @click="jump('cinema','影院')">
              <img :src="img_cinema_0">
              <p>影院</p>
            </div>

            <div @click="jump('collection','收藏')">
              <img :src="img_collection_0">
              <p>收藏</p>
            </div>

            <div @click="jump('mine','我的')">
              <img :src="img_mine_0">
              <p>我的</p>
            </div>
        </div>

    </div>
</template>

<script>
import img_movie_0 from '@/assets/images/img_movie_0.png'
import img_movie_1 from '@/assets/images/img_movie_1.png'
import img_cinema_0 from '@/assets/images/img_cinema_0.png'
import img_cinema_1 from '@/assets/images/img_cinema_1.png'
import img_collection_0 from '@/assets/images/img_collection_0.png'
import img_collection_1 from '@/assets/images/img_collection_1.png'
import img_mine_0 from '@/assets/images/img_mine_0.png'
import img_mine_1 from '@/assets/images/img_mine_1.png'
    export default {
        name: 'F-footer',
        data() {
            return {
                name: 'footer',
                img_movie_0: img_movie_0,
                img_cinema_0: img_cinema_0,
                img_collection_0: img_collection_0,
                img_mine_0: img_mine_0
            }
        },
        mounted() {
            this.jump('movie','电影')
        },
        methods: {
            jump(name,title) {
                //this.$router.push({name: name}) // push用法一
                this.$router.push({ name: name, params: {} }) // push用法三
                //this.$router.push({path: '/index/type/'+name, query: {}}) // push用法二
                
                this.$emit('get-title', title)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #footer {
        position: fixed;
        bottom: 0;
        left: 0px;
        z-index: 999;
        margin: 0;
        padding: 0;
        width: 100%;
    }
    #footer .content {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        background-color: #000;
        opacity: 0.6;
    }
    #footer .content > div {
        margin: 5px;
    }
    #footer .content > div > img {
        max-width: 20px;
        max-height: 20px;
    }
    #footer .content > div > p {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        color: #FFFFFF ;
    }
</style>