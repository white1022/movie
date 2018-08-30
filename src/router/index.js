import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Left from '@/components/left'
import Right from '@/components/right'

import Movie from '@/components/movie/movie'
import Cinema from '@/components/cinema/cinema'
import Collection from '@/components/collection/collection'
import Mine from '@/components/mine/mine'

import Login from '@/components/login/login'
import To_Login from '@/components/login/to_login'
import To_Register from '@/components/login/to_register'

import Search from '@/components/search/search'

import Status_404 from '@/components/http/status_404'

Vue.use(Router)

export default new Router({
    routes: [
        // 将'/'重定向到'/index'
        {
            path: '/',
            redirect: '/index/type/movie'
        },
        {
            path: '/index/:type',
            name: 'index',
            component: Index,
            children: [
                {
                    // 当 /index/:type/movie 匹配成功，
                    // Movie 会被渲染在 Index 的 <router-view> 中
                    // 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
                    path: 'movie',
                    name: 'movie',
                    component: Movie
                },
                {
                    path: 'cinema',
                    name: 'cinema',
                    component: Cinema
                },
                {
                    path: 'collection',
                    name: 'collection',
                    component: Collection
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: Mine
                },
                {
                    //没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由
                    path: '*',
                    //name: 'status_404',
                    component: Status_404
                }
            ]
        },
        {
            path: '/left',
            name: 'left',
            component: Left
        },
        {
            path: '/right',
            name: 'right',
            component: Right
        },
        {
        	path: '/login',
        	name: 'login',
        	component: Login
        },
        {
        	path: '/to_login',
        	name: 'to_login',
        	component: To_Login
        },
        {
        	path: '/to_register',
        	name: 'to_register',
        	component: To_Register
        },
        {
        	path: '/search',
        	name: 'search',
        	component: Search
        },
        {
        	path: '*',
        	name: 'status_404',
        	component: Status_404
        }

    ]
})
