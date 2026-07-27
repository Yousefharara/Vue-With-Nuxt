<script setup lang="ts">

const loggedUser = useState("loggedUser");

</script>

<template>
    <div class="bg-emerald-600 w-full h-screen text-white flex justify-center items-center text-7xl">
        <h1>Yousef About</h1>
        <div v-if="loggedUser">
            <!-- user is : {{ loggedUser.name }} -->
        </div>
    </div>
</template>