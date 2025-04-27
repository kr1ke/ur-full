<template>
  <section id="contact" class="py-12 md:py-16 lg:py-20 bg-gray-100">
    <div class="container w-full mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden w-full mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <!-- Left Side - Image -->
          <div class="lg:col-span-5 bg-cover bg-center hidden lg:block" style="background-image: url('./sud.jpg');">
            <!-- Image is set as background -->
          </div>
          
          <!-- Right Side - Form -->
          <div class="p-6 sm:p-10 lg:col-span-7">
            <div class="max-w-md mx-auto">
              <!-- Heading with two-color text -->
              <h2 class="text-2xl sm:text-3xl font-bold mb-4 tracking-[2.3px]">
                <span class="text-[#0061FF]">Бесплатная</span> первичная консультация
              </h2>
              
              <p class="text-gray-600 mb-8 tracking-[2.3px]">
                Индивидуальный подход к каждому клиенту
              </p>
              
              <!-- Contact Form -->
              <form class="space-y-6" @submit.prevent="submitForm">
                <!-- Name Input -->
                <div>
                  <label for="name" class="block text-sm font-medium text-[#6A6A6A] mb-1">Имя</label>
                  <input 
                    id="name" 
                    v-model="formData.name" 
                    type="text" 
                    class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше имя"
                    required
                  >
                </div>
                
                <!-- Phone Input -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-[#6A6A6A] mb-1">Номер телефона</label>
                  <div class="relative">
                    <input 
                      id="phone" 
                      v-model="formData.phone" 
                      type="tel" 
                      class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (___) ___-__-__"
                      required
                    >
                    <Phone class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                
                <!-- Message Textarea -->
                <div>
                  <label for="message" class="block text-sm font-medium text-[#6A6A6A] mb-1">Ваш вопрос</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    rows="4" 
                    class="w-full resize-none px-4 py-3 bg-gray-100 border border-gray-200 rounded-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите здесь текст вашего вопроса"
                    required
                  />
                </div>
                
                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="w-full bg-[#0061FF] cursor-pointer hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-[18px] transition-colors flex items-center justify-center"
                >
                  <Send class="w-4 h-4 mr-2" />
                  Отправить заявку
                </button>
                
                <!-- Privacy Policy Notice -->
                <p class="text-[#7A7A7A] text-xs text-start">
                  Нажимая кнопку «Отправить заявку», вы соглашаетесь с <a href="./conf.pdf" target="_blank" class="text-[#0061FF]">политикой конфиденциальности</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Phone, Send } from 'lucide-vue-next';
import { API_BASE_URL } from '../config';

// Form data
const formData = ref({
  name: '',
  phone: '',
  message: ''
});

// Form submission handler
const submitForm = async () => {
  try {
    // Send form data to backend
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Reset form after successful submission
    formData.value = {
      name: '',
      phone: '',
      message: ''
    };
    
    // Show success message
    alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова позже.');
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */
input::placeholder,
textarea::placeholder {
  color: rgba(106, 106, 106, 0.40);
}
</style>
