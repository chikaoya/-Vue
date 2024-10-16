<template>
    <div class="row">
      <div class="card" v-show='info.users.length' v-for='user in info.users' :key='user.login'>
        <!-- 动态绑定获取的数据，图片以及地址，点击跳转这些都是在原来数组上的所以动态绑定不然获取不到 -->
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <!-- 展示欢迎词 -->
      <h1 v-show='info.isFrist'>欢迎使用!</h1>
      <!-- 展示加载中 -->
      <h1 v-show='info.isLoding'>loding!</h1>
      <!-- 展示错误信息 -->
      <h1 v-show='info.errMsg'>{{info.errMsg}}</h1>

    </div>
</template>

<script>
export default {
  name:'demoList',
  data(){
    return{
      info:{
        isFrist:true,
      isLoding:false,
      errMsg:'',
      users:[]
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData',(dataObj)=>{
      console.log(this);
      // es6语法 展开表达式 替换 不破坏原本数据结构 只更改值
      this.info={...this.info,...dataObj}
    })
  },
}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>