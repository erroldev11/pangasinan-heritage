<template>
  <a
    :href="href"
    :class="[
      'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200',
      isActive 
        ? 'bg-yellow-400 text-navy-900 font-semibold' 
        : 'text-navy-200 hover:bg-navy-700 hover:text-white'
    ]"
    @click="$emit('click')"
  >
    <span v-if="icon" class="text-xl">{{ icon }}</span>
    <span>{{ label }}</span>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>