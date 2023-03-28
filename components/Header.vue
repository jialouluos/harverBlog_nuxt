<script lang="ts" setup>
import * as hooks from '~~/hooks';
import { useStore } from "~/store/index";
import { storeToRefs } from "pinia";

const store = storeToRefs(useStore()("accessory"));
const changeStyle = (theme?: "day" | "night") => {
    hooks.useTheme(theme);

};
const changeLock = () => {
    store.lock.value = !store.lock.value;
};
const searchArticle = () => {
    console.log('搜索');
};
</script>
<template>
    <header class="header_box">
        <h1 class="no-select">harver's Blog</h1>
        <ul>
            <li>
                <Icon :name="store.theme.value === 'day' ? 'bi:sun-fill' : 'teenyicons:moon-solid'" @click="changeStyle()"
                    class="icon-time-short icon-scale"></Icon>
            </li>
            <li>
                <Icon :name="store.lock.value ? 'ic:round-lock' : 'mdi:lock-open'" @click="changeLock()"
                    class="icon-time-short icon-scale"></Icon>
            </li>
            <li>
                <Icon name="ic:outline-search" @click="searchArticle()" class="icon-time-short  icon-scale"></Icon>
            </li>
        </ul>
    </header>
</template>
<style lang = "less" >
.header_box {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 999;
    box-shadow: 0 0 3px var(--font);
    opacity: 0.6;
    backdrop-filter: blur(2px);
    padding: 0 32px;

    &>h1 {
        .theme-font-color();
        z-index: 9999;
    }

    &>ul {
        display: flex;

        li {
            margin: 0px 10px;
        }
    }
}
</style>