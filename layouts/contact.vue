<template>
  <div>
    <Header />
    <div class="min-h-full">
              <nuxt />
    </div>
    <Footer2 />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer2 from '~/components/Footer2.vue'

export default {
  components: {
    Header, 
    Footer2
  }
}
</script>