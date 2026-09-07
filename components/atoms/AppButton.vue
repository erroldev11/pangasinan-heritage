<template>
  <button
    :class="[
      'rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      variants[variant],
      sizes[size],
      className
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const variants = {
  primary: 'bg-yellow-400 text-navy-900 hover:bg-yellow-300 focus:ring-yellow-400 shadow-lg hover:shadow-xl',
  secondary: 'bg-navy-700 text-white hover:bg-navy-600 focus:ring-navy-500',
  outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 focus:ring-yellow-400'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const emit = defineEmits(['click'])
</script>