<template>
  <!-- 使此按鈕生效 -->
  <button @click="increment">Mycount is: {{ mycount }}</button>
</template>

<script setup>
import { ref } from 'vue'

const mycount = ref(0)

function increment() {
  // 更新組件狀態
  mycount.value++
}
</script>

<style></style>
