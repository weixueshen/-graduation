import Vue from "vue"

import app from "./app.vue"

import vueRouter from "vue-router"

Vue.use(vueRouter)

import router from "./router.js"

import VueResource from "vue-resource"

Vue.use(VueResource)

//设置请求路径
Vue.http.options.root = 'http://127.0.0.1:8080/';

var vm = new Vue({
    el : "#app",
    data : {},
    render : c => {
        return  c(app)
    },
    router
})