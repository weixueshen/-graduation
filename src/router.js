import vueRouter from "vue-router"

import home from "./main/coms/Home.vue"

import login from "./main/coms/Login.vue"

import all from "./main/coms/All.vue"

// import search from "./main/coms/Search.vue"

// import play from "./main/coms/play.vue"

// // import newslist from "./main/child/NewsList.vue"

// // import newsinfo from "./main/child/NewsInfo.vue"

var router = new vueRouter({
    routes : [
        {path : '/' , redirect : '/home'},
        {path : "/home", component : home},
        {path : "/login", component : login},
        {path : "/all", component : all}
        // {path : "/member", component : member},
        // {path : "/shopcar", component : shopcar},
        // {path : "/search", component : search},
        // {path : "/play", name : 'play' , component : play}
    ],
    linkActiveClass : "mui-active"
})

export default router