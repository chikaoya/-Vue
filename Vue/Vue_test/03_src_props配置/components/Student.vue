<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ myAge+1 }}</h2>
    <button @click='updateAge'>尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    console.log(this);
    
    return {
      myAge:this.age
    };
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // 简单声明 开发中常用的也是这种形式
  props:['name','age','sex']

  // 接收的同时对数据进行类型限制
  /* props:{
    name:String,
    age:Number,
    sex:String
  } */
  //  接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  /* props:{
  name:{
    type: String,//name的类型是字符串
    required:true,//name是必要的
  },
  age:{
    type:Number,
    defalt:99//默认值
  },
  sex:{
    type:String,
    required:true
  } */
  // }
};

</script>

<style>
.demo {
  background-color: orange;
}
</style>