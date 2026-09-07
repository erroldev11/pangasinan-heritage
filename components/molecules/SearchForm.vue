<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
    <input
      v-model="query"
      type="text"
      :placeholder="placeholder"
      class="flex-1 px-5 py-4 rounded-xl border-2 border-navy-600 bg-navy-700/50 text-white placeholder-navy-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all outline-none"
      aria-label="Search heritage sites"
    />
    <AppButton type="submit" variant="primary" size="lg" class="px-8 py-4 rounded-xl font-semibold">
      🔍 Search
    </AppButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '../atoms/AppButton.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search heritage sites...'
  }
})

const query = ref('')
const emit = defineEmits(['search'])

const handleSubmit = () => {
  if (query.value.trim()) {
    emit('search', query.value.trim())
  }
}
</script>