<template>
    <div id="module-slot">
        <div class="title">
            <span>{{ pTitle1 }}</span>
            <span class="pTitle2">{{ pTitle2 }}</span>
        </div>
        <div class="module-content">
            <slot name="moduleSlot"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ModuleSlot',
    props: {
        pTitle1: { type: String, default: '' },
        pTitle2: { type: String, default: '' },
        pWidth: { type: String, default: '' },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
#module-slot {
    height: 315px;
    margin: 16px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: rgba(248, 248, 252, 0.85);
    -webkit-backdrop-filter: blur(15px) saturate(86%);
    backdrop-filter: blur(15px) saturate(86%);
}

.title {
    padding: 0 20px;
    height: 45px;
    line-height: 45px;
    font-size: 21px;
    font-weight: 600;
    color: #000;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pTitle2 {
    font-size: 12px;
    font-weight: 400;
    color: #515154;
}
.module-content {
    height: 270px;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
}
.w660 {
    width: 660px;
}
.w315 {
    width: 315px;
}
</style>
