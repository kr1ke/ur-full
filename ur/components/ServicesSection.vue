<template>
  <section id="services">
    <!-- Header section with light gray background -->
    <div class="bg-gray-100 py-10 md:py-12">
      <div class="container mx-auto px-4 mt-4 xl:mt-12">
        <h2 class="text-3xl sm:text-3xl md:text-4xl xl:text-[48px] font-semibold text-gray-800 tracking-[2.4px]">
          Услуги
        </h2>
      </div>
    </div>

    <!-- Main content section with dark background -->
    <div class="relative py-12 md:py-16 lg:py-20">
      <!-- Background image -->
      <div class="absolute inset-0" />

      <!-- Dark overlay -->
      <div
        class="absolute inset-0 services-background bg-black bg-opacity-80"
      />

      <!-- Content container -->
      <div class="container mx-auto px-4 relative z-10">
        <!-- Desktop layout for lg screens and larger -->
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <!-- Left column - Service description -->
          <div
            class="lg:col-span-6 text-white h-full flex flex-col justify-between"
          >
            <div>
              <h3 class="text-1xl md:text-2xl lg:text-4xl mb-6 font-medium leading-normal tracking-[2.66px]">
                {{ services[activeService].title }}
              </h3>
              <p class="text-gray-300 mb-8 md:text-xl text-lg font-normal leading-normal tracking-[2.04px]">
                {{ services[activeService].description }}
              </p>
            </div>
            <button
              class="bg-[#0061FF] w-fit rounded-[20px] cursor-pointer hover:bg-[#0061FF] text-white py-3 px-8 transition-colors inline-flex items-center md:text-[22px] font-medium leading-normal tracking-[1.1px]"
              @click="scrollToContact"
            >
              Бесплатная консультация
            </button>
          </div>

          <!-- Right column - Service categories -->
          <div class="lg:col-span-5 lg:col-start-8">
            <div class="flex flex-col gap-5 w-full">
              <button
                v-for="(service, index) in services"
                :key="index"
                :class="[
                  'w-full cursor-pointer text-center bg-[#0061FF] w-full py-3 px-6 rounded-[20px] transition-colors xl:text-[22px] font-normal leading-normal tracking-[1.1px]',
                  activeService === index
                    ? 'bg-white text-gray-900 border border-white'
                    : 'bg-transparent border border-white text-white hover:opacity-80',
                ]"
                @click="activeService = index"
              >
                {{ service.title }}
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet accordion layout for screens smaller than lg -->
        <div class="lg:hidden">
          <ServiceAccordion :services="services" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ServiceAccordion from "./ServiceAccordion.vue";

// Active service index
const activeService = ref(0);

// Method to scroll to contact section
const scrollToContact = () => {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Services data
const services = [
  {
    title: "Банкротство",
    description:
      "Наша компания осуществила более 300 банкротств общей стоимостью примерно 250 млн. рублей, опыт и команда позволяют гарантированно и в короткие сроки списать Ваши долги.",
  },
  {
    title: "Семейные споры",
    description:
      "Специализируемся на разрешении семейных конфликтов, включая развод, раздел имущества, определение места жительства детей и взыскание алиментов. Наш опыт позволяет находить решения даже в самых сложных ситуациях, защищая Ваши права и интересы.",
  },
  {
    title: "Комплексное сопровождение бизнеса",
    description:
      "Предоставляем полное юридическое сопровождение для бизнеса любого масштаба. Наши услуги включают регистрацию компаний, составление и анализ договоров, представительство в суде, решение налоговых споров и защиту интересов предпринимателей.",
  },
  {
    title: "Защита прав потребителей",
    description:
      "Помогаем отстоять Ваши права при приобретении некачественных товаров или услуг. Проводим досудебное урегулирование, составляем претензии и исковые заявления, представляем Ваши интересы в суде и добиваемся справедливой компенсации.",
  },
  {
    title: "Трудовые споры",
    description:
      "Защищаем права как работников, так и работодателей в трудовых конфликтах. Оказываем помощь при незаконном увольнении, невыплате заработной платы, нарушении трудового договора и других ситуациях, связанных с трудовым законодательством.",
  },
  {
    title: "Земельные и жилищные споры",
    description:
      "Специализируемся на разрешении конфликтов, связанных с недвижимостью, землей и жилищным правом. Помогаем с оформлением прав собственности, представляем интересы в спорах с соседями и управляющими компаниями.",
  },
  {
    title: "Административное право",
    description:
      "Обеспечиваем защиту Ваших прав, включая проверку законности действий государственных структур, оспаривание муниципальных решений, налоговых вопросов и последствий ДТП, с полным сопровождением на всех этапах.",
  },
];

</script>

<style scoped>
.services-background {
  background-image: url("https://i.ibb.co/sY9HbKJ/fon-uslugi.png") !important;
  background-size: cover !important;
  background-position: center !important;
}
</style>
