<script setup lang="ts">
const { currentTemplate } = useTemplate()

const changeTemplate = (template: 'template-one' | 'template-two') => {
  currentTemplate.value = template
}
</script>

<template>
  <nav class="container-sec">
    <ul class="flex gap-3 items-center justify-center my-3">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
      <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      <button
        @click="changeTemplate('template-one')"
        :class="currentTemplate === 'template-one' ? 'bg-blue-500' : ''"
      >
        Change Template one
      </button>
      <button
        @click="changeTemplate('template-two')"
        :class="currentTemplate === 'template-two' ? 'bg-blue-500' : ''"
      >
        Change Template two
      </button>
    </ul>
  </nav>
</template>
