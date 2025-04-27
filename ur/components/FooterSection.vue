<template>
  <footer id="footer" class="py-8 bg-[#383838] text-white">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 max-sm:items-center max-sm:text-center"
      >
        <!-- Address Section -->
        <div
          class="w-full lg:w-auto max-sm:flex max-sm:flex-col max-sm:items-center"
        >
          <p class="font-medium mb-2 text-lg max-sm:text-center">Адрес:</p>
          <a
            href="https://yandex.ru/maps/2297277/razan/"
            class="text-white max-sm:text-center hover:text-blue-300"
          >
            г. Рязань, пр. Первомайский, д. 59
          </a>

          <!-- Social Icons -->
          <div class="flex space-x-4 mt-4 max-sm:justify-center mb-3">
            <a
              href="https://api.whatsapp.com/send/?phone=79641616546&text&type=phone_number&app_absent=0"
              target="_blank"
              class="text-white hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon class="h-7 w-7" />
            </a>
            <a
              href="https://t.me/uristryazan1"
              target="_blank"
              class="text-white hover:text-blue-400 transition-colors"
              aria-label="Telegram"
            >
              <TelegramIcon class="h-7 w-7" />
            </a>
            <a
              href="https://vk.com/uristryazan1"
              target="_blank"
              class="text-white hover:text-blue-400 transition-colors"
              aria-label="Vk"
            >
              <VkIcon class="h-7 w-7" />
            </a>
          </div>
          <a
            href="./conf.pdf"
            target="_blank"
            class="text-xs max-sm:mt-5 hover:underline text-gray-500 text-center"
            >Политика конфиденциальности</a
          >
        </div>

        <!-- Contact Info -->
        <div
          class="w-full lg:w-auto text-left sm:text-center lg:text-right max-sm:flex max-sm:flex-col max-sm:items-center"
        >
          <div
            class="flex items-center group justify-start mb-3 max-sm:justify-center"
          >
            <Phone class="w-5 h-5 mr-2 group-hover:text-blue-300 text-white flex-shrink-0" />
            <a
              href="tel:+79641616546"
              class="text-white group-hover:text-blue-300 transition-colors"
              >+7 (964)-161-65-46</a
            >
          </div>
          <div
            class="flex items-center group justify-start mb-3 max-sm:justify-center"
          >
            <Mail class="w-5 h-5 mr-2 group-hover:text-blue-300 text-white flex-shrink-0" />
            <a
              href="mailto:info.legal.help@yandex.ru"
              class="text-white group-hover:text-blue-300 transition-colors break-all"
              >info.legal.help@yandex.ru</a
            >
          </div>
          <div class="flex justify-start mb-3 max-sm:justify-center">
            <Clock class="w-5 h-5 mr-2 text-white flex-shrink-0" />
            <div class="text-white text-start max-sm:text-center">
              <p>ПН-ПТ: 9:00-19:00</p>
              <p>СБ: 10:00-15:00</p>
            </div>
          </div>
        </div>

        <!-- Logo Section -->
        <div
          class="w-full lg:w-auto flex justify-start sm:justify-center max-md:justify-center"
        >
          <img
            src="/images/fon-logo.png"
            alt="Юридическая помощь"
            class="object-cover w-21 h-21 sm:w-30 sm:h-30"
          />
        </div>
      </div>

      <!-- Copyright line -->
      <div
        class="mt-6 pt-4 border-t border-gray-700 text-center text-xs text-gray-500"
      >
        <p>2025 Юридическая помощь. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Phone, Mail, Clock } from "lucide-vue-next";
import WhatsAppIcon from "./icons/WhatsAppIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";
import VkIcon from "./icons/VkIcon.vue";
</script>

<style scoped>
/* Apply letter-spacing to all text elements */
#footer {
  letter-spacing: 1.2px;
}
</style>
