<template>
  <section id="testimonials" class="py-12 md:py-16 lg:py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2
        class="text-3xl sm:text-3xl md:text-4xl xl:text-[48px] font-semibold xl:mt-12 text-gray-800 tracking-[2.4px] pb-10"
      >
      Что говорят о нас?
      </h2>
      
      <!-- Testimonials Slider -->
      <div class="relative">
        <swiper
          :modules="modules"
          :slides-per-view="slidesPerView"
          :space-between="30"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :navigation="false"
          class="testimonials-swiper"
        >
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-sm overflow-hidden h-[438px]">
              <!-- Testimonial Text -->
              <div class="md:col-span-2 py-6 pl-6 max-lg:pr-6">
                <!-- Star Rating -->
                <div class="flex gap-2 mb-4">
                  <StarIcon class="w-5 h-5" v-for="star in 5" :key="star" />
                </div>
                
                <!-- Client Name -->
                <h3 class="text-xl font-bold text-gray-900 mb-4">{{ testimonial.name }}</h3>
                
                <!-- Client Position -->
                <a :href="testimonial.link" target="_blank" class="mb-4 text-gray-900 lg:text-[16px] font-medium">{{ testimonial.position }}</a>
                
                <!-- Testimonial Content -->
                <p class="text-gray-700 mt-4">{{ testimonial.content }}</p>
              </div>
              
              <!-- Client Photo -->
              <div class="hidden lg:block">
                <img :src="testimonial.photo" alt="Client" class="h-full w-full object-cover rounded-tr-lg rounded-br-lg">
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
       <!-- Navigation Buttons (moved to left corner) -->
       <div class="flex items-center justify-start mt-8">
        <button class="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 hover:bg-white transition-colors" @click="prevSlide">
          <ChevronLeft class="h-5 w-5 text-gray-600" />
        </button>
        <button class="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors" @click="nextSlide">
          <ChevronRight class="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Link } from 'lucide-vue-next';
import StarIcon from './icons/StarIcon.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Testimonials data
const testimonials = [
  {
    name: 'Владимир',
    position: 'Частный клиент',
    content: 'Остался доволен предоставленной консультацией и дальнейшим сотрудничеством, очень хорошие грамотные юристы. Обращался по военному вопросу. Цены приемлемые',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=nbvncfa8hkh55c9dhcpvnzk1fm&si=u7y172qrf0e0y2g0efzb7h5wz4&utm_source=review',
    photo: 'https://avatars.mds.yandex.net/get-yapic/63032/0d-9/orig',
    rating: 5
  },
  {
    name: 'Евгения',
    position: 'Частный клиент',
    content: 'Хорошее расположение офиса, грамотный состав специалистов. Рекомендую!',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=1bdxhy3aux2fwxf4nkqw13ne80&si=u7y172qrf0e0y2g0efzb7h5wz4&utm_source=review',
    photo: 'https://avatars.mds.yandex.net/get-yapic/35885/enc-c8d958d4cbf3be24a0548e7987b43600617f39d5c47f0623a7cee591a8ae151b/orig',
    rating: 5
  },
  {
    name: 'Елена',
    position: 'Частный клиент',
    content: 'Обратилась по вопросу оформления документов для ИП. Получила квалифицированную консультацию и помощь в подготовке всех необходимых документов. Всё было сделано быстро и качественно. Благодарна за профессионализм и внимательное отношение!',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=1bdxhy3aux2fwxf4nkqw13ne80&si=u7y172qrf0e0y2g0efzb7h5wz4&utm_source=review',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    rating: 5
  },
  {
    name: 'Елена',
    position: 'Частный клиент',
    content: 'Обратилась в организацию чтобы решить вопрос по алиментам. Все сделали максимально быстро.',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=Kuksaelenaz&si=u7y172qrf0e0y2g0efzb7h5wz4&utm_source=review',
    photo: 'https://avatars.mds.yandex.net/get-yapic/43978/0y-9/orig',
    rating: 5
  }
];

// Swiper modules (removed Pagination)
const modules = [Navigation, Autoplay];

// Swiper instance
let swiperInstance = null;

// Responsive slides per view
const slidesPerView = ref(1);

// Swiper navigation methods
const prevSlide = () => {
  if (swiperInstance) {
    swiperInstance.slidePrev();
  }
};

const nextSlide = () => {
  if (swiperInstance) {
    swiperInstance.slideNext();
  }
};

// Initialize swiper instance and responsive behavior
onMounted(() => {
  // Get Swiper instance
  swiperInstance = document.querySelector('.testimonials-swiper').swiper;
  
  // Update slides per view based on window width
  const updateSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      slidesPerView.value = 2;
    } else if (window.innerWidth >= 768) {
      slidesPerView.value = 1;
    } else {
      slidesPerView.value = 1;
    }
  };
  
  // Initial call
  updateSlidesPerView();
  
  // Add resize listener
  window.addEventListener('resize', updateSlidesPerView);
});
</script>

<style scoped>
.testimonials-swiper {
  padding-bottom: 0; /* Removed padding for pagination */
}

/* Remove styles for pagination bullets since they're no longer used */
</style>
