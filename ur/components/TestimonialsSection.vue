/<template>
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-sm overflow-hidden h-[338px]">
              <!-- Testimonial Text -->
              <div class="md:col-span-2 py-6 pl-6 max-lg:pr-6">
                <!-- Star Rating -->
                <div class="flex gap-2 mb-4">
                  <StarIcon class="w-5 h-5" v-for="star in 5" :key="star" />
                </div>
                
                <!-- Client Name -->
                <a :href="testimonial.link" target="_blank" class="text-xl hover:underline font-bold text-gray-900 mb-4">{{ testimonial.name }}</a>
                
                <!-- Client Position -->
                <p class="mb-4 text-gray-900 lg:text-[16px] font-medium">{{ testimonial.position }}</p>
                
                <!-- Testimonial Content -->
                <p class="text-gray-700 mt-4">{{ testimonial.content }}</p>
              </div>
              
              <!-- Client Photo -->
              <div class="hidden md:block">
                <img :src="testimonial.photo" :alt="testimonial.name" class="h-full w-full object-cover rounded-tr-lg rounded-br-lg">
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
    <!-- Yandex Maps Reviews Widget -->
    <div class="container mx-auto px-4 mt-12 lg:mt-16">
      <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 tracking-[1.2px] mb-8 text-center">
        Мы в Яндекс.Картах
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <!-- Yandex Maps Widget -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <iframe
              src="https://yandex.ru/maps-reviews-widget/52942668686?comments"
              class="w-full border-0"
              style="min-height: 400px; height: 500px;"
          ></iframe>
        </div>
        
        <!-- Organization Rating Info -->
        <div class="hidden lg:flex bg-white rounded-xl shadow-sm p-8 flex-col flex justify-center items-center text-center">
          <div class="mb-6">
            <div class="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">4.8 из 5</div>
            <div class="flex justify-center gap-1 mb-4">
              <StarIcon class="w-8 h-8 text-yellow-400 fill-current" v-for="star in 5" :key="star" />
            </div>
          </div>
          
          <h4 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Юридическая помощь № 1
          </h4>
          
          <div class="flex items-center justify-center gap-2 mb-6">
            <div class="flex items-center gap-1">
              <div class="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span class="text-white text-xs font-bold">Я</span>
              </div>
              <span class="text-red-500 font-semibold">Карты</span>
            </div>
          </div>
          
          <p class="text-gray-600 text-lg">
            На основе 244 оценок
          </p>
          
          <a
              href="https://yandex.ru/maps/org/yuridicheskaya_pomoshch_1/52942668686/"
              target="_blank"
              class="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Читать все отзывы
          </a>
        </div>
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
    photo: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'Евгения',
    position: 'Частный клиент',
    content: 'Хорошее расположение офиса, грамотный состав специалистов. Рекомендую!',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=1bdxhy3aux2fwxf4nkqw13ne80&si=u7y172qrf0e0y2g0efzb7h5wz4&utm_source=review',
    photo: '/images/testimonial-2.jpg',
    rating: 5
  },
  {
    name: 'ILONA I.',
    position: 'Частный клиент',
    content: 'Я в восторге от профессионалов, которые здесь работают, не могу написать на всеобщее обозрение, чем помогли, но главное решили мой вопрос ! Рекомендую !',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=jb0vv4301xpp36q28b6kdv1p14&si=kwmu0xkm7dq3wna2h2macjzk0m&utm_source=review',
    photo: '/images/testimonial-3.jpg',
    rating: 5
  },
  {
    name: 'Елена',
    position: 'Частный клиент',
    content: 'Обратилась в организацию чтобы решить вопрос по алиментам. Все сделали максимально быстро.',
    link: 'https://yandex.ru/maps/org/52942668686/reviews?reviews%5BpublicId%5D=Kuksaelenaz&si=u7y172qrf0e0y2g0efzb7h5wz4&utm_source=review',
    photo: '/images/testimonial-4.jpg',
    rating: 5
  },
  {
    name: 'Андрей Сергеевич',
    position: 'Предприниматель',
    content: 'Обращался за помощью в оформлении сделки купли-продажи недвижимости. Все документы подготовили профессионально, сделка прошла без проблем. Отличная юридическая поддержка!',
    link: '#',
    photo: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'Мария Владимировна',
    position: 'Пенсионер',
    content: 'Помогли с оформлением наследства после смерти мужа. Очень сложная ситуация была, но юристы разъяснили все нюансы и довели дело до конца. Большое спасибо!',
    link: '#',
    photo: '/images/testimonial-2.jpg',
    rating: 5
  },
  {
    name: 'Игорь',
    position: 'Частный клиент',
    content: 'Решал трудовой спор с работодателем. Юристы компании грамотно составили все документы и представили мои интересы в суде. Выиграли дело! Рекомендую всем.',
    link: '#',
    photo: '/images/testimonial-3.jpg',
    rating: 5
  },
  {
    name: 'Наталья Петровна',
    position: 'Домохозяйка',
    content: 'Консультировалась по вопросам развода и раздела имущества. Получила исчерпывающие ответы на все вопросы. Специалисты очень внимательные и профессиональные.',
    link: '#',
    photo: '/images/testimonial-4.jpg',
    rating: 5
  },
  {
    name: 'Дмитрий Александрович',
    position: 'Руководитель',
    content: 'Обратился с вопросом по корпоративному праву. Юристы оперативно подготовили все необходимые документы для реорганизации компании. Работают на высоком уровне.',
    link: '#',
    photo: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'Светлана',
    position: 'Частный клиент',
    content: 'Понадобилась помощь в составлении договора аренды жилья. Все нюансы учли, договор составили грамотно. Теперь чувствую себя защищенной с юридической стороны.',
    link: '#',
    photo: '/images/testimonial-2.jpg',
    rating: 5
  },
  {
    name: 'Олег Викторович',
    position: 'Пенсионер',
    content: 'Обращался по вопросу взыскания задолженности с управляющей компании. Юристы грамотно составили претензию и довели дело до успешного завершения. Профессиональный подход!',
    link: '#',
    photo: '/images/testimonial-3.jpg',
    rating: 5
  },
  {
    name: 'Анна Сергеевна',
    position: 'Медицинский работник',
    content: 'Помогли оформить опекунство над пожилой мамой. Очень сложная процедура, но специалисты провели через все этапы и объяснили каждый шаг. Огромная благодарность!',
    link: '#',
    photo: '/images/testimonial-4.jpg',
    rating: 5
  },
  {
    name: 'Сергей',
    position: 'Водитель',
    content: 'Лишили прав за превышение скорости. Юристы помогли обжаловать решение в суде и восстановить водительское удостоверение. Отличная работа команды!',
    link: '#',
    photo: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'Татьяна Михайловна',
    position: 'Учитель',
    content: 'Консультировалась по вопросу оформления льготной пенсии. Получила подробные разъяснения и помощь в подготовке документов. Очень довольна обслуживанием.',
    link: '#',
    photo: '/images/testimonial-2.jpg',
    rating: 5
  },
  {
    name: 'Максим Андреевич',
    position: 'IT-специалист',
    content: 'Нужна была помощь в регистрации товарного знака. Юристы профессионально провели всю процедуру, учли все нюансы интеллектуальной собственности. Рекомендую!',
    link: '#',
    photo: '/images/testimonial-3.jpg',
    rating: 5
  },
  {
    name: 'Инна Владимировна',
    position: 'Домохозяйка',
    content: 'Обратилась с проблемой по алиментам на детей. Юристы быстро разобрались в ситуации и помогли взыскать задолженность через суд. Спасибо за поддержку!',
    link: '#',
    photo: '/images/testimonial-4.jpg',
    rating: 5
  },
  {
    name: 'Владислав',
    position: 'Студент',
    content: 'Помогли с восстановлением в университете после отчисления. Грамотно составили апелляцию и представили мои интересы в комиссии. Теперь продолжаю учебу!',
    link: '#',
    photo: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'Галина Петровна',
    position: 'Продавец',
    content: 'Была проблема с незаконным увольнением. Юристы помогли восстановиться на работе и взыскать компенсацию за вынужденный прогул. Профессионально и быстро!',
    link: '#',
    photo: '/images/testimonial-2.jpg',
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
