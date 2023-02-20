<template>
    <div class="home">
        <WorkTime />
        <WeatherInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import WorkTime from '@/components/WorkTime.vue';
import WeatherInfo from '@/components/WeatherInfo.vue';

export default defineComponent({
    components: { WorkTime, WeatherInfo },
    name: 'HomeView',
});
</script>

<style scoped>
.home {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<style>
@media (max-width: 320px) {
    .main-content {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    .w1 {
        width: calc(100% - 32px);
    }
    .w2 {
        width: calc(100% - 32px);
    }
}

@media (min-width: 321px) and (max-width: 759px) {
    .main-content {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    .w1 {
        width: 315px;
    }
    .w2 {
        width: 315px;
    }
}
@media (min-width: 760px) and (max-width: 1164px) {
    .main-content {
        width: 690px;
        justify-content: space-between;
    }
    .w1 {
        width: 315px;
    }
    .w2 {
        width: 315px;
    }
}
@media (min-width: 1165px) {
    .main-content {
        width: 1035px;
        justify-content: space-between;
    }
    .w1 {
        width: 315px;
    }
    .w2 {
        width: 660px;
    }
}
</style>
