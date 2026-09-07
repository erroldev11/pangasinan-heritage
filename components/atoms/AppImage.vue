<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="['w-full h-auto', className]"
    :loading="loading"
    @load="$emit('load')"
    @error="$emit('error')"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  width: {
    type: [Number, String],
    default: 'auto'
  },
  height: {
    type: [Number, String],
    default: 'auto'
  },
  className: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  }
})

const emit = defineEmits(['load', 'error'])
</script>