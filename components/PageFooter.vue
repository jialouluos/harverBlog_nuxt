<template>
    <div class="index-page">
        count: {{ store.count }}
        <br />
        doubleCount: {{ store.doubleCount }}
        <button @click="store.countPlusOne">PlusOne</button>
    </div>
</template>
    
<script setup lang='ts'>
import { useStore } from '~/store';

const store = useStore().useAccessory();
</script>