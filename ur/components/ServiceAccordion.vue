<template>
  <div class="service-accordion flex items-center flex-col">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service-item mb-4 w-full"
    >
      <button
        @click="toggleService(index)"
        :class="[
          'w-full text-left p-4 rounded-[20px] transition-colors font-normal leading-normal tracking-[1.1px] flex justify-between items-center',
          activeService === index
            ? 'bg-white text-gray-900 border border-white'
            : 'bg-transparent border border-white text-white hover:opacity-80',
        ]"
      >
        <span class="xl:text-[22px]">{{ service.title }}</span>
        <span
          class="transform transition-transform duration-300"
          :class="activeService === index ? 'rotate-180' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>

      <transition name="accordion">
        <div v-show="activeService === index" class="service-content">
          <div class="p-4 text-gray-300">
            <p class="md:text-xl text-lg font-normal leading-normal tracking-[2.04px]">
              {{ service.description }}
            </p>
          </div>
        </div>
      </transition>
    </div>
    <button
      class="bg-[#0061FF] mx-auto mt-6 rounded-[20px] cursor-pointer hover:opacity-90 text-white py-3 px-8 transition-colors inline-flex items-center md:text-[22px] font-medium leading-normal tracking-[1.1px]"
      @click="scrollToContact"
    >
      Бесплатная консультация
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});

const activeService = ref(null);

const toggleService = (index) => {
  activeService.value = activeService.value === index ? null : index;
};

// Method to scroll to contact section
const scrollToContact = () => {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding: 0;
}

.service-content {
  overflow: hidden;
}

.service-item {
  max-width: 100%;
}
</style>
