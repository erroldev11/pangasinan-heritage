<template>
  <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <!-- Image Container -->
    <div class="relative h-56 w-full overflow-hidden">
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
        format="webp"
        quality="80"
        sizes="sm:100vw md:50vw lg:33vw"
      />
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      <!-- Rating Badge -->
      <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
        <div class="flex items-center gap-1.5">
          <span class="text-yellow-400 text-sm">⭐</span>
          <span class="text-sm font-bold text-gray-800">{{ rating }}</span>
          <span class="text-xs text-gray-500">({{ reviews }})</span>
        </div>
      </div>
      
      <!-- Icon Badge -->
      <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
        <span class="text-2xl">{{ icon }}</span>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-5">
      <h3 class="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-500 mb-3 flex items-center gap-1">
        <span class="text-lg">📍</span> {{ location }}
      </p>
      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
        {{ description }}
      </p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1 text-sm text-gray-500">
          <span class="text-yellow-400">★</span>
          <span class="font-semibold text-gray-700">{{ rating }}</span>
          <span>({{ reviews }} reviews)</span>
        </div>
        <AppButton 
          variant="primary" 
          size="sm"
          class="px-5 py-2.5 rounded-xl font-semibold"
          @click="$emit('learn-more')"
        >
          Explore Now →
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '../atoms/AppButton.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '🏛️'
  },
  rating: {
    type: Number,
    default: 4.5
  },
  reviews: {
    type: Number,
    default: 0
  }
})

defineEmits(['learn-more'])
</script>