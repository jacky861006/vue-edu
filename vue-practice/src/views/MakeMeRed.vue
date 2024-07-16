<template>
  <h1 :class="titleClass">Make me red</h1>
  <!-- 此處添加一個動態 class 綁定 -->
</template>

<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<style>
.title {
  color: red;
}
</style>
