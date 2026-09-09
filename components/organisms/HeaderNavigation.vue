<template>
  <header class="bg-navy-800/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-navy-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <span class="text-2xl">🏛️</span>
          <span class="text-xl font-bold text-white">
            Pangasinan <span class="text-yellow-400">Heritage</span>
          </span>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <NavigationItem
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :label="item.label"
            :icon="item.icon"
            :isActive="activePath === item.href"
          />
        </nav>
        
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-navy-700 transition text-white"
          @click="toggleMobileMenu"
        >
          <span class="text-2xl">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden py-4 border-t border-navy-700 animate-slideDown"
      >
        <nav class="flex flex-col gap-1">
          <NavigationItem
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :label="item.label"
            :icon="item.icon"
            :isActive="activePath === item.href"
            @click="closeMobileMenu"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import NavigationItem from '../molecules/NavigationItem.vue'

defineProps({
  siteTitle: {
    type: String,
    default: 'Pangasinan Heritage'
  },
  navItems: {
    type: Array,
    default: () => [
      { href: '#home', label: 'Home', icon: '🏠' },
      { href: '#sites', label: 'Sites', icon: '🏛️' },
      { href: '#about', label: 'About', icon: 'ℹ️' },
      { href: '#contact', label: 'Contact', icon: '📧' },
    ]
  },
  activePath: {
    type: String,
    default: '/'
  }
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideDown {
  animation: slideDown 0.2s ease-out;
}
</style>