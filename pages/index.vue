<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="relative bg-navy-800 text-white py-24 overflow-hidden">
      <!-- Decorative Background -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <div class="mb-6">
          <span class="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-sm font-semibold text-yellow-300 border border-yellow-400/30">
            🇵🇭 Discover Pangasinan
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Explore the Rich Heritage <br class="hidden sm:block" />
          of <span class="text-yellow-400">Pangasinan</span>
        </h1>
        
        <p class="text-navy-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover the most iconic heritage sites, stunning beaches, 
          and cultural treasures that make Pangasinan a must-visit destination.
        </p>
        
        <SearchForm @search="handleSearch" />
        
        <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm text-navy-300">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🏝️</span>
            <span>124 Islands</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">🗼</span>
            <span>Historic Lighthouses</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">♨️</span>
            <span>Natural Hot Springs</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Heritage Sites Grid -->
    <div id="sites">
      <HeritageGrid 
        :sites="filteredSites"
        title="Featured Heritage Sites"
        @site-click="handleSiteClick"
      />
    </div>
    
    <!-- About / Call to Action -->
    <section id="about" class="bg-navy-800 py-16 border-t border-navy-700">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Explore Pangasinan?
        </h2>
        <p class="text-navy-300 text-lg mb-8 max-w-2xl mx-auto">
          Plan your next adventure and experience the beauty and culture of Pangasinan.
        </p>
        <button class="bg-yellow-400 text-navy-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl">
          Start Your Journey →
        </button>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-navy-900 py-16 border-t border-navy-700">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p class="text-navy-300 text-lg mb-4 max-w-2xl mx-auto">
          Have questions about visiting Pangasinan? Reach out to us.
        </p>
        <p class="text-yellow-400 font-semibold">
          📧 info@pangasinanheritage.ph
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchForm from '@/components/molecules/SearchForm.vue'
import HeritageGrid from '@/components/organisms/HeritageGrid.vue'
import { heritageSites } from '@/data/heritage'

const searchQuery = ref('')

const filteredSites = computed(() => {
  if (!searchQuery.value) {
    return heritageSites
  }
  const query = searchQuery.value.toLowerCase()
  return heritageSites.filter(site => 
    site.title.toLowerCase().includes(query) ||
    site.location.toLowerCase().includes(query) ||
    site.description.toLowerCase().includes(query)
  )
})

const handleSearch = (query) => {
  searchQuery.value = query
}

const handleSiteClick = (site) => {
  console.log('Selected site:', site)
}
</script>