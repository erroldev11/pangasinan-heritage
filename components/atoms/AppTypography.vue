<template>
  <component
    :is="tag"
    :class="[
      variants[variant],
      className
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'body',
    validator: (value) => ['h1', 'h2', 'h3', 'h4', 'body', 'small', 'caption'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

const variants = {
  h1: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
  h3: 'text-xl md:text-2xl lg:text-3xl font-semibold',
  h4: 'text-lg md:text-xl lg:text-2xl font-semibold',
  body: 'text-base text-gray-700',
  small: 'text-sm text-gray-500',
  caption: 'text-xs text-gray-400'
}

const tag = computed(() => {
  if (props.variant.startsWith('h')) {
    return props.variant
  }
  return 'p'
})
</script>