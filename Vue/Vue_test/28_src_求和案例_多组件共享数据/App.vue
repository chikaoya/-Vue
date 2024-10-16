<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  name:'app',
  components: {Count,Person},
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