<template>
  <section class="w-full bg-[#383838] text-white py-8 md:py-12 lg:py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Column -->
        <div class="flex flex-col space-y-6">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Цифровой регион. Липецк
          </h2>
          <p class="text-base md:text-lg text-gray-300">
            Инновационный проект, направленный на развитие цифровой инфраструктуры и повышение качества жизни в регионе
          </p>
          <div class="flex flex-wrap gap-4">
            <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Подробнее
              <ArrowRightIcon class="w-5 h-5" />
            </button>
            <button class="px-6 py-3 border border-gray-300 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
              Контакты
              <ContactIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Right Column -->
        <div class="relative">
          <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img 
              src="/images/digital-region.jpg" 
              alt="Цифровой регион Липецк" 
              class="object-cover w-full h-full"
            />
          </div>
          <!-- Info Icon Overlay -->
          <div class="absolute top-4 right-4">
            <button class="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <InfoIcon class="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import InfoIcon from './icons/InfoIcon.vue'
import ContactIcon from './icons/ContactIcon.vue'
</script> 