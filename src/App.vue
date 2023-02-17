<template>
    <NavBar />
    <HomeView />
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import HomeView from '@/views/HomeView.vue';
export default {
    components: {
        NavBar,
        HomeView,
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
