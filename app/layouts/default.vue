<script setup lang="ts">
import Footer from '~/components/organisms/Footer.vue'
import Navbar from '~/components/organisms/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>
