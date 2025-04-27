<template>
  <section id="advantages" class="py-12 md:py-16 lg:py-20 bg-gray-100">
    <div class="container mx-auto px-4 mt-4">
      <!-- Section Title -->
      <h2
        class="text-3xl sm:text-3xl md:text-4xl xl:text-[48px] font-semibold xl:mt-12 text-gray-800 tracking-[2.4px] pb-10"
      >
        Преимущества
      </h2>

      <!-- Advantages Accordions -->
      <div class="w-full space-y-6">
        <Disclosure
          v-for="(advantage, index) in advantages"
          :key="index"
          v-slot="{ open }"
          as="div"
          class="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <DisclosureButton
            class="w-full cursor-pointer px-6 py-5 flex items-center justify-between focus:outline-none"
          >
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-full bg-blue-600 p-2 md:p-3 mr-4"
              >
                <component
                  :is="advantage.icon"
                  class="h-5 w-5 md:h-6 md:w-6 text-white"
                />
              </div>
              <h3
                class="sm:text-xl font-medium text-start text-gray-800 leading-normal tracking-[2.6px]"
                style="font-weight: 500"
              >
                {{ advantage.title }}
              </h3>
            </div>
            <div
              class="min-h-8 min-w-8 h-8 w-8 rounded-xl border flex items-center justify-center"
            >
              <PlusIcon v-if="!open" class="h-5 w-5 text-gray-600" />
              <MinusIcon v-else class="h-5 w-5 text-gray-600" />
            </div>
          </DisclosureButton>
          <transition
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
          >
            <DisclosurePanel class="px-6 pt-0 pb-5 accordion-content">
              <div class="sm:pl-16">
                <p
                  class="text-gray-700 font-normal leading-normal tracking-[1.2px]"
                >
                  {{ advantage.description }}
                </p>
                <ul v-if="advantage.points" class="mt-4 space-y-2">
                  <li
                    v-for="(point, pointIndex) in advantage.points"
                    :key="pointIndex"
                    class="flex items-start"
                  >
                    <div>
                      <CheckCircle class="text-[#0061FF] h-5 w-5 mr-2" />
                    </div>
                    <span
                      class="text-gray-700 font-normal leading-normal tracking-[1.2px]"
                      >{{ point }}</span
                    >
                  </li>
                </ul>
              </div>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
  Plus as PlusIcon,
  Minus as MinusIcon,
  CheckCircle,
  Award,
  Clock,
  Shield,
  Users,
  Scale,
} from "lucide-vue-next";
import { ref } from "vue";

// Animation methods
const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
  el.style.overflow = "hidden";
};

const enter = (el) => {
  el.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out";
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
};

const afterEnter = (el) => {
  el.style.height = "auto";
  el.style.overflow = "visible";
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.overflow = "hidden";
};

const leave = (el) => {
  el.style.transition = "height 0.2s ease-in, opacity 0.2s ease-in";
  el.style.height = "0";
  el.style.opacity = "0";
};

// Advantages data
const advantages = [
  {
    title: "Профессионализм и опыт",
    icon: Award,
    description:
      "Наша команда состоит из юристов с многолетним опытом работы в различных областях права. Мы постоянно совершенствуем наши знания и навыки, чтобы предоставлять вам лучшие юридические услуги.",
    points: [
      "Более 10 лет опыта в юридической практике",
      "Сотни успешно решенных дел различной сложности",
      "Команда специалистов с профильным образованием",
    ],
  },
  {
    title: "Оперативность решения вопросов",
    icon: Clock,
    description:
      "Мы ценим ваше время и стремимся к максимально быстрому разрешению юридических вопросов. Наши специалисты работают эффективно, не теряя в качестве предоставляемых услуг.",
    points: [
      "Ответ на любой запрос в течение 24 часов",
      "Срочные консультации при критических ситуациях",
      "Четкое соблюдение всех процессуальных сроков",
    ],
  },
  {
    title: "Конфиденциальность информации",
    icon: Shield,
    description:
      "Мы гарантируем полную конфиденциальность всей предоставленной вами информации. Безопасность ваших данных — один из наших главных приоритетов.",
    points: [
      "Строгое соблюдение адвокатской тайны",
      "Защищенные каналы коммуникации",
      "Подписание соглашения о конфиденциальности",
    ],
  },
  {
    title: "Индивидуальный подход",
    icon: Users,
    description:
      "Мы разрабатываем уникальную стратегию для каждого клиента, учитывая все особенности его дела и личные пожелания. Такой подход позволяет достигать наилучших результатов.",
    points: [
      "Детальный анализ каждой конкретной ситуации",
      "Персональный юрист на весь период сотрудничества",
      "Гибкий график встреч и консультаций",
    ],
  },
  {
    title: "Честность и прозрачность",
    icon: Scale,
    description:
      "В нашей работе мы придерживаемся принципов честности и прозрачности. Вы всегда будете знать о реальных перспективах дела и всех возможных рисках.",
    points: [
      "Честная оценка шансов на успех",
      "Прозрачное ценообразование без скрытых платежей",
      "Регулярные отчеты о ходе работы по вашему делу",
    ],
  },
];
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
}
</style>
