<template>
  <div id="app">
    <breadcrumb></breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'
//import BlogPost from './components/BlogPost.vue'


export default {
  name: 'app',
  data : function () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      user: { 
        name: 'chh',
        password: 123456 
      }
    }
  },
  components: {
    Breadcrumb
  }
}
</script>

<style>


</style>
