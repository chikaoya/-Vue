<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click='serachUsers'>Serach</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data(){
    return{
      keyWord:''
    }
  },
  methods: {
    serachUsers(){
      this.$bus.$emit('updateListData',{isFrist:false,isLoding:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        res=>{ console.log('请求成功了',);
        this.$bus.$emit('getUsers',res.data.items)
        // 请求成功后更新List的数据
      this.$bus.$emit('updateListData',{isLoding:false,errMsg:'',users:res.data.items})
        },
        err=>{console.log('请求失败了',err.massage)
        // 请求失败后更新List的数据
      this.$bus.$emit('updateListData',{isLoding:false,errMsg:err.massage,users:[]})

        }
        
      )
    }
  },
}
</script>

<style>

</style>