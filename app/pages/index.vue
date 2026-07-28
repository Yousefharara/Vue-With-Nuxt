<script setup lang="ts">
import Computed from '~/components/Computed.vue';

const count = ref(1) // ref is auto-imported
const parson = reactive({
  name: "Yousef Harara",
  jobTitle: "Software Developer"
})
const increment = () => {
  count.value++;
}
</script>
<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-rose-100">
      <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
    <h1 class="text-4xl font-bold text-green-600">
      Nuxt + Tailwind CSS 🚀
    </h1>
    <BaseButton message="Message" />
    <ParagraphObjectProps :user="{
      name: 'Yousef',
      age: 22
    }"/>

    <article>
      <h2>use state</h2>
      <div class="px-4 py-2 rounded-md bg-emerald-700 text-white font-semibold m-4 cursor-pointer" @click="increment">
        +
      </div>
      <h3>{{ count }}</h3>
    </article>
    <article>
      <h2>Parson Name: {{ parson.name }}</h2>
      <h2>Parson Job Title : {{ parson.jobTitle }}</h2>
    </article>
    <Computed />
  </div>
</template>