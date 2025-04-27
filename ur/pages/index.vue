<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <AdvantagesSection />
    <ContactFormSection />
    <TestimonialsSection />
    <MapSection />
    <FooterSection />
  </div>
</template>

<script setup>
// Import all section components
import HeroSection from '~/components/HeroSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import AdvantagesSection from '~/components/AdvantagesSection.vue';
import ContactFormSection from '~/components/ContactFormSection.vue';
import TestimonialsSection from '~/components/TestimonialsSection.vue';
import MapSection from '~/components/MapSection.vue';
import FooterSection from '~/components/FooterSection.vue';
</script>