<template>
  <span :class="['inline-flex items-center justify-center', className]" :style="{ fontSize: size + 'px' }">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  },
  className: {
    type: String,
    default: ''
  }
})
</script>