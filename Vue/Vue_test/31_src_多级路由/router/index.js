// 该文件用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'


// 创建并且暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About,
      
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          // 跳转的路径/会自动补齐因此，子集路径不需要/
          path:'News',
          component:News
        },
        {
          path:'Message',
          component:Message
        }
      ]
    },
  ]
})