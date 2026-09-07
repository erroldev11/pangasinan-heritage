<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
        {{ title }}
      </h2>
      <p class="text-navy-300 text-lg max-w-2xl mx-auto">
        Discover the most iconic heritage sites and tourist destinations in Pangasinan
      </p>
      <div class="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
    </div>
    
    <!-- Loading State -->
    <div v-if="sites.length === 0" class="text-center py-16">
      <div class="text-6xl mb-4">🔍</div>
      <h3 class="text-xl font-semibold text-white mb-2">No sites found</h3>
      <p class="text-navy-300">Try adjusting your search criteria</p>
    </div>
    
    <!-- Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <HeritageCard
        v-for="site in sites"
        :key="site.id"
        :title="site.title"
        :location="site.location"
        :description="site.description"
        :image="site.image"
        :icon="site.icon"
        :rating="site.rating"
        :reviews="site.reviews"
        @learn-more="$emit('site-click', site)"
      />
    </div>
  </section>
</template>

<script setup>
import HeritageCard from '../molecules/HeritageCard.vue'

defineProps({
  sites: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Heritage Sites'
  }
})

defineEmits(['site-click'])
</script>