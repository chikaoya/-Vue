<template>
  <div>
       <h2>Home组件内容</h2>
       <div>
         <ul class="nav nav-tabs">
           <li>
            <!-- 如果是子集路由，则需要带着父路径 -->
             <router-link class="list-group-item"  active-class="active" to="/Home/News">News</router-link>
           </li>
           <li>
             <router-link class="list-group-item " active-class="active" to="/Home/Message">Message</router-link>
           </li>
         </ul>
         <router-view></router-view>
       </div>
  </div>
   
</template>

<script>
export default {
  name:'Home',
  /* beforeDestroy() {
    console.log('Home组件即将被销毁');
    
  },
  mounted() {
    console.log('Home组件挂载完毕了',this);
  }, */
}
</script>
