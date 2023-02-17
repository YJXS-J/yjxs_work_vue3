<template>
    <NavBar />
    <router-view />
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#app {
    min-width: 320px;
    background-color: #0197f0;
}
</style>
