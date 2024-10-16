<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  components: {Count},
    name:'app',
}
</script>

<style >
  .container{
    display: flex;
    justify-content: space-around;
  }
  img {width: 100%;}
</style>