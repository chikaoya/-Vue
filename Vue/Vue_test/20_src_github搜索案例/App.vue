<template>
  <div>
  <div class="container">
    <Search/>
    <DemoList/>
  </div>
</div>
</template>

<script>
import Search from './components/search.vue'
import DemoList from './components/demolist.vue'
export default {
  components: { Search,DemoList },
    name:'app',
}
</script>

