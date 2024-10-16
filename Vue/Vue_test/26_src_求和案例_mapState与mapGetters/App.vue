<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name:'app',
  components: {Count},
    // mounted() {
    //     console.log('app',this);
    //   },
}
</script>

<style >
  .container{
    display: flex;
    justify-content: space-around;
  }
  img {width: 100%;}
</style>