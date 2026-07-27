<script setup lang="ts">
interface IUser {
  name: string;
  age: number;
}

defineProps<{ user: IUser }>();
</script>

<template>
  <div>
    <h2>name is : {{ user.name }}</h2>
    <h2>age is : {{ user.age }}</h2>
  </div>
</template>
