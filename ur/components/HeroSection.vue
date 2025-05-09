<template>
  <section id="hero" class="relative xl:min-h-screen flex flex-col">
    <!-- Background with overlay -->
    <div
      class="absolute w-full h-full !bg-cover inset-0 z-0"
      style="background: url('./fon.png') no-repeat center top"
    ></div>

    <!-- Fixed header that appears on scroll -->
    <Transition name="slide-down">
      <div
        v-if="isScrolled"
        class="fixed top-0 left-0 w-full z-50 py-2 flex justify-center px-4"
      >
        <div
          class="container rounded-2xl max-xl:pt-2"
          style="
            border-radius: 20px;
            border: 2px solid rgba(215, 215, 215, 0.5);
            background: rgba(255, 255, 255, 0.6);
            box-shadow: 0px 0px 47.8px 0px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(30px);
          "
        >
          <div class="flex items-center justify-between py-2 px-4">
            <!-- Logo -->
            <a
              href="/"
              class="text-gray-900 text-[16px] sm:text-[24px] font-semibold tracking-[2.4px] leading-normal"
              >Юридическая помощь №1</a
            >

            <!-- Phone number - Mobile -->
            <!-- <a
              href="tel:+79641616546"
              class="xl:hidden flex items-center justify-center border border-gray-900 text-gray-900 rounded-2xl px-3 py-1 hover:bg-[#0061FF] font-medium hover:text-white hover:border-[#0061FF] transition-colors cursor-pointer text-sm"
            >
              +7 (964)-161-65-46
            </a> -->

            <nav class="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              <a
                class="text-gray-900 font-medium transition xl:text-[18px] xl:font-normal xl:leading-normal"
                href="#services"
                @click.prevent="scrollToSection('#services')"
                >Услуги</a
              >
              <a
                class="text-gray-900 font-medium transition xl:text-[18px] xl:font-normal xl:leading-normal"
                href="#advantages"
                @click.prevent="scrollToSection('#advantages')"
                >Преимущества</a
              >
              <a
                class="text-gray-900 font-medium transition xl:text-[18px] xl:font-normal xl:leading-normal"
                href="#testimonials"
                @click.prevent="scrollToSection('#testimonials')"
                >Отзывы</a
              >
              <a
                class="text-gray-900 font-medium transition xl:text-[18px] xl:font-normal xl:leading-normal"
                href="#footer"
                @click.prevent="scrollToSection('#footer')"
                >Контакты</a
              >
            </nav>

            <div class="flex items-center">
              <!-- Phone number - Desktop -->
              <a
                href="tel:+79641616546"
                class="hidden h-[46px] mr-14 xl:flex items-center justify-center border border-gray-900 text-gray-900 rounded-2xl px-3 py-1 hover:bg-[#0061FF] font-medium hover:text-white hover:border-[#0061FF] transition-colors cursor-pointer"
                style="
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                "
              >
                <Phone class="w-6 h-6 mr-2 mt-0.5" />
                +7 (964) 161-65-46
              </a>

              <!-- Social Media Icons -->
              <div class="hidden xl:flex items-center space-x-3">
                <a
                  href="https://api.whatsapp.com/send/?phone=79641616546&text&type=phone_number&app_absent=0"
                  target="_blank"
                  class="text-gray-900 transition cursor-pointer"
                >
                  <WhatsAppIcon class="fill-black w-[30px] h-[30px]" />
                </a>
                <a
                  href="https://t.me/uristryazan1"
                  target="_blank"
                  class="text-gray-900 transition cursor-pointer"
                >
                  <TelegramIcon class="w-[30px] h-[30px]" />
                </a>
                <a
                  href="https://vk.com/uristryazan1"
                  target="_blank"
                  class="text-gray-900 transition cursor-pointer"
                >
                  <VkIcon class="w-[30px] h-[30px]" />
                </a>
              </div>

              <!-- Mobile menu button -->
              <button
                class="xl:!hidden text-white cursor-pointer burger-button"
                @click="isFixedMenuOpen = !isFixedMenuOpen"
              >
                <div class="burger-icon-container">
                  <span
                    class="burger-line !bg-gray-900"
                    :class="{ open: isFixedMenuOpen }"
                  />
                  <span
                    class="burger-line !bg-gray-900"
                    :class="{ open: isFixedMenuOpen }"
                  />
                  <span
                    class="burger-line !bg-gray-900"
                    :class="{ open: isFixedMenuOpen }"
                  />
                </div>
              </button>
            </div>
          </div>

          <!-- Fixed Header Mobile Navigation Menu -->
          <div
            class="fixed-mobile-menu-container relative z-20 xl:hidden"
            :class="{ open: isFixedMenuOpen }"
          >
            <div class="container mx-auto pb-6 px-4">
              <nav class="flex flex-col space-y-4">
                <a
                  class="text-gray-900 text-lg text-center font-medium hover:text-blue-600 transition py-2 mobile-menu-item"
                  href="#services"
                  @click.prevent="scrollToSectionFixedMobile('#services')"
                  >Услуги</a
                >
                <a
                  class="text-gray-900 text-lg text-center font-medium hover:text-blue-600 transition py-2 mobile-menu-item"
                  href="#advantages"
                  @click.prevent="scrollToSectionFixedMobile('#advantages')"
                  >Преимущества</a
                >
                <a
                  class="text-gray-900 font-medium text-lg text-center hover:text-blue-600 transition py-2 mobile-menu-item"
                  href="#testimonials"
                  @click.prevent="scrollToSectionFixedMobile('#testimonials')"
                  >Отзывы</a
                >
                <a
                  class="text-gray-900 font-medium text-lg text-center hover:text-blue-600 transition py-2 mobile-menu-item"
                  href="#footer"
                  @click.prevent="scrollToSectionFixedMobile('#footer')"
                  >Контакты</a
                >

                <!-- Mobile contact options -->
                <div class="flex flex-col space-y-3 mt-4">
                  <a
                    href="tel:+79641616546"
                    class="flex items-center justify-center text-gray-900 font-medium"
                    style="
                      font-size: 18px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                    "
                  >
                    <Phone class="w-6 h-6 mr-2 mt-0.5" />
                    +7 (964)-161-65-46
                  </a>

                  <div class="flex items-center space-x-4 justify-center mt-2">
                    <a
                      href="https://api.whatsapp.com/send/?phone=79641616546&text&type=phone_number&app_absent=0"
                      target="_blank"
                      class="text-gray-900 transition cursor-pointer"
                    >
                      <WhatsAppIcon class="fill-black w-[30px] h-[30px]" />
                    </a>
                    <a
                      href="https://t.me/uristryazan1"
                      target="_blank"
                      class="text-gray-900 transition cursor-pointer"
                    >
                      <TelegramIcon class="w-[30px] h-[30px]" />
                    </a>
                    <a
                      href="https://vk.com/uristryazan1"
                      target="_blank"
                      class="text-gray-900 transition cursor-pointer"
                    >
                      <VkIcon class="w-[30px] h-[30px]" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Original Navigation bar -->
    <div class="relative z-10 pt-6 px-4 xl:px-8">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a
            href="/"
            class="text-white text-[16px] sm:text-[24px] font-semibold tracking-[2.4px] leading-normal"
            >Юридическая помощь №1</a
          >

          <nav class="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            <a
              class="text-white font-medium hover:text-gray-300 transition xl:text-[18px] xl:font-normal xl:leading-normal"
              href="#services"
              @click.prevent="scrollToSection('#services')"
              >Услуги</a
            >
            <a
              class="text-white font-medium hover:text-gray-300 transition xl:text-[18px] xl:font-normal xl:leading-normal"
              href="#advantages"
              @click.prevent="scrollToSection('#advantages')"
              >Преимущества</a
            >
            <a
              class="text-white font-medium hover:text-gray-300 transition xl:text-[18px] xl:font-normal xl:leading-normal"
              href="#testimonials"
              @click.prevent="scrollToSection('#testimonials')"
              >Отзывы</a
            >
            <a
              class="text-white font-medium hover:text-gray-300 transition xl:text-[18px] xl:font-normal xl:leading-normal"
              href="#footer"
              @click.prevent="scrollToSection('#footer')"
              >Контакты</a
            >
          </nav>
          <!-- Navigation Menu and buttons -->
          <div class="flex items-center">
            <!-- Desktop Navigation -->

            <!-- Phone number -->
            <a
              href="tel:+79641616546"
              class="mr-14 hidden h-[46px] xl:flex items-center justify-center border border-white text-white rounded-2xl px-4 py-2 hover:bg-[#0061FF] font-medium hover:text-white hover:border-[#0061FF] transition-colors cursor-pointer"
              style="
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              "
            >
              <Phone class="w-6 h-6 mr-2 mt-0.5" />
              +7 (964)-161-65-46
            </a>

            <!-- Social Media Icons -->
            <div class="hidden xl:flex items-center space-x-4">
              <a
                href="https://api.whatsapp.com/send/?phone=79641616546&text&type=phone_number&app_absent=0"
                target="_blank"
                class="text-white hover:text-gray-300 transition cursor-pointer"
              >
                <WhatsAppIcon class="fill-white w-[30px] h-[30px]" />
              </a>
              <a
                href="https://t.me/uristryazan1"
                target="_blank"
                class="text-white hover:text-gray-300 transition cursor-pointer"
              >
                <TelegramIcon class="w-[30px] h-[30px]" />
              </a>
              <a
                href="https://vk.com/uristryazan1"
                target="_blank"
                class="text-white hover:text-gray-300 transition cursor-pointer"
              >
                <VkIcon class="w-[30px] h-[30px]" />
              </a>
            </div>

            <!-- Mobile menu button -->
            <button
              class="xl:!hidden ml-4 text-white cursor-pointer burger-button"
              @click="isMenuOpen = !isMenuOpen"
            >
              <div class="burger-icon-container">
                <span class="burger-line" :class="{ open: isMenuOpen }" />
                <span class="burger-line" :class="{ open: isMenuOpen }" />
                <span class="burger-line" :class="{ open: isMenuOpen }" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      class="mobile-menu-container relative z-20 xl:hidden"
      :class="{ open: isMenuOpen }"
    >
      <div class="container mx-auto py-4 px-4">
        <nav class="flex flex-col space-y-4">
          <a
            class="text-white font-medium hover:text-gray-300 transition py-2 mobile-menu-item"
            href="#services"
            @click.prevent="scrollToSectionMobile('#services')"
            >Услуги</a
          >
          <a
            class="text-white font-medium hover:text-gray-300 transition py-2 mobile-menu-item"
            href="#advantages"
            @click.prevent="scrollToSectionMobile('#advantages')"
            >Преимущества</a
          >
          <a
            class="text-white font-medium hover:text-gray-300 transition py-2 mobile-menu-item"
            href="#testimonials"
            @click.prevent="scrollToSectionMobile('#testimonials')"
            >Отзывы</a
          >
          <a
            class="text-white font-medium hover:text-gray-300 transition py-2 mobile-menu-item"
            href="#footer"
            @click.prevent="scrollToSectionMobile('#footer')"
            >Контакты</a
          >

          <!-- Social Media Icons for mobile -->
          <div class="flex items-center space-x-4 py-2">
            <a
              href="https://api.whatsapp.com/send/?phone=79641616546&text&type=phone_number&app_absent=0"
              target="_blank"
              class="text-white hover:text-gray-300 transition cursor-pointer"
            >
              <WhatsAppIcon class="fill-white w-[30px] h-[30px]" />
            </a>
            <a
              href="https://t.me/uristryazan1"
              target="_blank"
              class="text-white hover:text-gray-300 transition cursor-pointer"
            >
              <TelegramIcon class="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://vk.com/uristryazan1"
              target="_blank"
              class="text-white hover:text-gray-300 transition cursor-pointer"
            >
              <VkIcon class="w-[30px] h-[30px]" />
            </a>
          </div>
          <a
            href="tel:+79641616546"
            class="text-start text-white font-medium mt-2"
            style="
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            "
          >
            <Phone class="w-6 h-6 mr-2 inline-block" />
            +7 (964)-161-65-46
          </a>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div
      class="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 xl:px-8 py-16"
    >
      <h1
        class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold leading-[130%] tracking-[3.8px]"
      >
        <span class="font-medium">Защитим Ваши </span>
        <span class="font-medium">права</span><br />
        <span class="font-semibold"
          >Профессионально
          <span class="font-medium">и</span> Конфиденциально</span
        >
      </h1>
      <p
        class="text-xl sm:text-2xl text-white mt-6 max-w-2xl font-normal tracking-[1.2px]"
      >
        Решим вопрос оперативно и гарантированно
      </p>
      <button
        style="
          background: linear-gradient(136deg, #0061ff 76.31%, #003a99 130.07%);
        "
        class="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-[20px] transition-colors cursor-pointer relative overflow-hidden"
        @click="scrollToSection('#contact')"
      >
        <span
          class="relative z-10 xl:text-[22px] sm:text-[18px] text-[16px] font-medium leading-normal tracking-[1.1px]"
          >Получить консультацию юриста</span
        >
        <div class="wrapper_animate">
          <div class="ink animate" />
        </div>
      </button>
    </div>

    <!-- Three cards at the bottom -->
    <div class="relative z-10 px-4 xl:px-8 pb-16">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <!-- First card with wrapper -->
          <div
            class="p-4 xl:p-6"
            style="
              border-radius: 20px;
              background: linear-gradient(
                239deg,
                rgba(0, 97, 255, 0.3) -57.75%,
                rgba(130, 131, 133, 0.3) 31.12%
              );
              box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6px);
            "
          >
            <h3
              class="text-white text-center text-base xl:text-xl font-medium tracking-wide leading-relaxed py-1 xl:py-2"
              style="
                text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
                letter-spacing: 0.5px;
              "
            >
              Понимаете, что Ваши права были нарушены?
            </h3>
          </div>

          <!-- Second card with wrapper -->
          <div
            class="p-4 xl:p-6 standard-card"
            style="
              border-radius: 20px;
              background: linear-gradient(
                239deg,
                rgba(0, 97, 255, 0.3) -57.75%,
                rgba(130, 131, 133, 0.3) 31.12%
              );
              box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6px);
            "
          >
            <h3
              class="text-white text-center text-base xl:text-xl font-medium tracking-wide leading-relaxed py-1 xl:py-2"
              style="
                text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
                letter-spacing: 0.5px;
              "
            >
              Запутались в законах и не знаете, как защитить себя?
            </h3>
          </div>

          <!-- Third card with wrapper -->
          <div
            class="gradient-border-mask-revers flex justify-center items-center p-4 xl:p-6"
            style="
              border-radius: 20px;
              background: linear-gradient(
                239deg,
                rgba(0, 97, 255, 0.3) -57.75%,
                rgba(130, 131, 133, 0.3) 31.12%
              );
              box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6px);
            "
          >
            <h3
              class="h-full flex justify-center items-center text-white text-center text-base xl:text-xl font-medium tracking-wide leading-relaxed py-1 xl:py-2"
              style="
                text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
                letter-spacing: 0.5px;
              "
            >
              Ваша ситуация кажется безнадежной?
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Phone } from "lucide-vue-next";
import WhatsAppIcon from "./icons/WhatsAppIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";
import VkIcon from "./icons/VkIcon.vue";

const isMenuOpen = ref(false);
const isFixedMenuOpen = ref(false);
const isScrolled = ref(false);

// Smooth scrolling function for desktop
const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Smooth scrolling function for mobile (closes menu after click)
const scrollToSectionMobile = (sectionId) => {
  isMenuOpen.value = false;
  setTimeout(() => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 300); // Wait for menu close animation
};

// Smooth scrolling function for fixed header mobile menu
const scrollToSectionFixedMobile = (sectionId) => {
  isFixedMenuOpen.value = false;
  setTimeout(() => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 300); // Wait for menu close animation
};

onMounted(() => {
  let lastScrollTop = 0;
  const scrollThreshold = 100; // Show header after scrolling 100px

  window.addEventListener(
    "scroll",
    () => {
      const st = window.scrollY;

      if (st > scrollThreshold) {
        // If scrolling down and past threshold, show the header
        isScrolled.value = true;
        // Close the static header's mobile menu when fixed header appears
        isMenuOpen.value = false;
      } else {
        // If scrolled back to top, hide the header
        isScrolled.value = false;
        // Also close the fixed header's mobile menu when the header is hidden
        isFixedMenuOpen.value = false;
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    { passive: true }
  );
});
</script>

<style scoped>
.hero-background {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

/* Slide-down transition animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Ripple animation */
.wrapper_animate {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
}

.ink {
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 100%;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  z-index: 20;
  height: 350px;
  width: 350px;
  left: -120px;
  bottom: -220px;
}

.animate {
  -webkit-animation: ripple 3.5s linear infinite;
  -moz-animation: ripple 3.5s linear infinite;
  -ms-animation: ripple 3.5s linear infinite;
  -o-animation: ripple 3.5s linear infinite;
  animation: ripple 3.5s linear infinite;
}

@keyframes ripple {
  0% {
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  30% {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

/* Custom burger menu styles */
.burger-button {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.burger-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.burger-icon-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18px;
  width: 24px;
  position: relative;
}

.burger-line {
  display: block;
  height: 2px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Burger animation when open */
.burger-line:nth-child(1).open {
  transform: translateY(8px) rotate(45deg);
}

.burger-line:nth-child(2).open {
  opacity: 0;
}

.burger-line:nth-child(3).open {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile menu animation */
.mobile-menu-container,
.fixed-mobile-menu-container {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease;
  opacity: 0;
  margin-top: 20px;
}

.mobile-menu-container.open,
.fixed-mobile-menu-container.open {
  max-height: 450px;
  opacity: 1;
}

/* Fixed menu specific styles */
.fixed-mobile-menu-container {
  border-radius: 0 0 20px 20px;
  margin-top: 10px;
  border-top: none;
}

.fixed-mobile-menu-container.open {
  max-height: 450px;
}

.mobile-menu-item {
  transform: translateY(-10px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transition-delay: calc(var(--index) * 0.05s);
}

.mobile-menu-container.open .mobile-menu-item,
.fixed-mobile-menu-container.open .mobile-menu-item {
  transform: translateY(0);
  opacity: 1;
}

/* Add global smooth scrolling */
:global(html) {
  scroll-behavior: smooth;
}

@media (min-width: 1280px) {
  .gradient-border-mask,
  .gradient-border-mask-reverse,
  .standard-card {
    position: relative;
    border-radius: 20px;
    background: linear-gradient(
      239deg,
      rgba(0, 97, 255, 0.3) -57.75%,
      rgba(130, 131, 133, 0.3) 31.12%
    );
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
  }

  .gradient-border-mask::before {
    content: "";
    position: absolute;
    inset: -6px;
    padding: 2px;
    border-radius: 23px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 50%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .gradient-border-mask-reverse::before {
    content: "";
    position: absolute;
    inset: -6px;
    padding: 2px;
    border-radius: 23px;
    background: linear-gradient(
      315deg,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 50%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
</style>
