<template lang="">
    <div id="navbar">
        <div class="NavBarTitle">
            <img class="logoSVG" src="@/assets/logo.svg" alt="logo" srcset="" />
            <span class="logoText">YJXS-Work</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NvaBar',
    data() {
        return {};
    },
};
</script>

<style scoped>
#navbar {
    padding: 0 16px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(37, 38, 40, 0.21);
    background-image: radial-gradient(circle at 25%, hsla(0, 0%, 100%, 0.2), rgba(50, 50, 50, 0.2) 80%);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    position: sticky;
    top: 0;
    z-index: 999;
}

.NavBarTitle {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logoSVG {
    width: 16px;
    height: 16px;
    display: block;
}

.logoText {
    font-size: 16px;
    font-weight: 700;
    color: #f5f5f7;
    margin-left: 8px;
}
</style>
