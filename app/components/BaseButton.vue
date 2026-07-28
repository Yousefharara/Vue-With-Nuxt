<script setup lang="ts">
interface IProps {
  message: string
  color?: string
}

const props = withDefaults(defineProps<IProps>(), {
  color: 'bg-red-500',
})
</script>

<template>
  <button class="bg-blue-700 text-white px-4 py-2 rounded" :class="props.color">
    {{ props.message }}
  </button>
</template>
