<script setup lang="ts">
const loggedUser = useState('loggedUser', (): { name: string | null } => ({ name: null }))

const login = () => {
  loggedUser.value = {
    name: 'Yousef with Token',
  }
}
</script>

<template>
  <div>
    <h1>Login Page</h1>
    <button
      @click="login"
      class="cursor-pointer rounded-md bg-indigo-700 text-white font-semibold px-6 py-2"
    >
      Login
    </button>
    <div v-if="loggedUser">user is : {{ loggedUser.name }}</div>
  </div>
</template>
