<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'HomeView',
  components: {
    AboutComponent
  }
}
</script>