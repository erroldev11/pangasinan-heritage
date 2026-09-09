<template>
  <div class="min-h-screen bg-navy-900 flex flex-col">
    <HeaderNavigation />
    
    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-navy-950 text-white py-12 border-t border-navy-700">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-white">🏛️ Pangasinan Heritage</h3>
            <p class="text-navy-300 text-sm">Discover the rich cultural heritage and stunning destinations of Pangasinan.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-3 text-white">Quick Links</h4>
            <ul class="space-y-2 text-sm text-navy-300">
              <li><a href="#home" class="hover:text-white transition">Home</a></li>
              <li><a href="#sites" class="hover:text-white transition">Heritage Sites</a></li>
              <li><a href="#about" class="hover:text-white transition">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3 text-white">Destinations</h4>
            <ul class="space-y-2 text-sm text-navy-300">
              <li>Hundred Islands</li>
              <li>Bolinao Lighthouse</li>
              <li>Balungao Hot Spring</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3 text-white">Connect With Us</h4>
            <div class="flex gap-4 text-2xl">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>▶️</span>
            </div>
          </div>
        </div>
        <div class="border-t border-navy-700 pt-8 text-center text-sm text-navy-400">
          <p>© 2026 Pangasinan Heritage Digital Showcase. Built with ❤️ using Nuxt.js 3</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HeaderNavigation from '@/components/organisms/HeaderNavigation.vue'
</script>