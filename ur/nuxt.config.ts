import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["nuxt-yandex-metrika", "@nuxtjs/sitemap"],
  site: {
    url: 'https://urpomosh1.ru',
  },
  yandexMetrika: {
    id: '101465129',
    options: {
      webvisor: true,
      trackHash: true,
      trackLinks: true,
      accurateTrackBounce: true
    }
  },
  sitemap: {
    exclude: ['/admin/**']
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Юридическая помощь №1 - Юридические услуги в Рязани",
      meta: [
        {
          name: "yandex-verification",
          content: "acd90179e79c3d0f"
        },
        {
          name: "description",
          content:
            'Профессиональные юридические услуги в Рязани от компании "Юридическая помощь №1". Квалифицированная помощь юристов по различным правовым вопросам. Записывайтесь на консультацию!',
        },
        {
          name: "keywords",
          content:
            "юридическая помощь, юридические услуги, юрист Рязань, юридическая консультация, правовая помощь, консультация юриста",
        },
        {
          property: "og:title",
          content: "Юридическая помощь №1 - Юридические услуги в Рязани",
        },
        {
          property: "og:site_name",
          content: "Юридическая помощь №1 - Юридические услуги в Рязани",
        },
        {
          property: "og:description",
          content:
            'Профессиональные юридические услуги в Рязани от компании "Юридическая помощь №1". Квалифицированная помощь юристов по различным правовым вопросам. Записывайтесь на консультацию!',
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://urpomosh1.ru" },
        { property: "og:image", content: "/images/fon-logo.png" },
        { name: "yandex", content: "all" },
        { name: "googlebot", content: "all" },
        { name: "robots", content: "all" },
        { name: "revisit-after", content: "7 days" },
        { name: "language", content: "Russian" },
        { name: "author", content: "Юридическая помощь №1" },
        { name: "geo.region", content: "RU-ru" },
        { name: "geo.placename", content: "Рязань" },
        { name: "geo.position", content: "54.629565;39.741917" },
        { name: "ICBM", content: "54.629565, 39.741917" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://urpomosh1.ru" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Юридическая помощь №1",
            legalName: "Юридическая помощь №1",
            taxID: "290109614114",
            image: "/images/fon-logo.png",
            url: "https://urpomosh1.ru",
            telephone: "+79641616546",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+79641616546",
                contactType: "customer service",
                areaServed: "RU",
                availableLanguage: ["Russian"]
              },
              {
                "@type": "ContactPoint",
                email: "info.legal.help@yandex.ru",
                contactType: "customer support"
              }
            ],
            email: "info.legal.help@yandex.ru",
            description:
              "Профессиональные юридические услуги в Рязани от компании 'Юридическая помощь №1'. Квалифицированная помощь юристов по различным правовым вопросам.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "пр. Первомайский, д. 59",
              addressLocality: "Рязань",
              postalCode: "390000",
              addressCountry: "RU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "54.629565",
              longitude: "39.741917",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "10:00",
                closes: "15:00",
              },
            ],
            sameAs: [
              "https://vk.com/uristryazan1",
              "https://t.me/uristryazan1",
            ],
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Владимир",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Остался доволен предоставленной консультацией и дальнейшим сотрудничеством, очень хорошие грамотные юристы. Обращался по военному вопросу. Цены приемлемые",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Евгения",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Хорошее расположение офиса, грамотный состав специалистов. Рекомендую!",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "4",
            },
            priceRange: "₽₽",
          }),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Юридическая помощь №1",
            legalName: "ООО Юридическая помощь №1",
            taxID: "290109614114",
            serviceType: "Юридические услуги",
            telephone: "+79641616546",
            email: "info.legal.help@yandex.ru",
            address: {
              "@type": "PostalAddress",
              streetAddress: "пр. Первомайский, д. 59",
              addressLocality: "Рязань",
              postalCode: "390000",
              addressCountry: "RU"
            },
            areaServed: {
              "@type": "City",
              name: "Рязань",
            },
            provider: {
              "@type": "Organization",
              name: "Юридическая помощь №1",
              legalName: "ООО Юридическая помощь №1",
              taxID: "290109614114",
              logo: "/images/fon-logo.png",
              telephone: "+79641616546",
              email: "info.legal.help@yandex.ru",
              address: {
                "@type": "PostalAddress",
                streetAddress: "пр. Первомайский, д. 59",
                addressLocality: "Рязань",
                postalCode: "390000",
                addressCountry: "RU"
              },
              url: "https://urpomosh1.ru"
            },
          }),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Какие юридические услуги вы предоставляете?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Мы предоставляем широкий спектр юридических услуг, включая консультации по правовым вопросам, составление документов, представительство в суде, помощь по семейным, трудовым, наследственным и другим юридическим вопросам.",
                },
              },
              {
                "@type": "Question",
                name: "Где находится Ваш офис?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Наш офис расположен по адресу: г. Рязань, пр. Первомайский, д. 59.",
                },
              },
              {
                "@type": "Question",
                name: "Как можно связаться с Вами?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Вы можете связаться с нами по телефону +7 (964) 161-65-46, по электронной почте info.legal.help@yandex.ru, или через наши социальные сети VK и Telegram.",
                },
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Юридическая помощь №1",
            "url": "https://urpomosh1.ru",
            "publisher": {
              "@type": "Organization",
              "name": "Юридическая помощь №1",
              "legalName": "ООО Юридическая помощь №1",
              "taxID": "290109614114"
            }
          }),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Юридическая помощь №1",
            "legalName": "Юридическая помощь №1",
            "taxID": "290109614114",
            "url": "https://urpomosh1.ru",
            "logo": "/images/fon-logo.png",
            "telephone": "+79641616546",
            "email": "info.legal.help@yandex.ru",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "пр. Первомайский, д. 59",
              "addressLocality": "Рязань",
              "postalCode": "390000",
              "addressCountry": "RU"
            },
            "sameAs": [
              "https://vk.com/uristryazan1",
              "https://t.me/uristryazan1"
            ]
          }),
        },
      ],
    },
  },
  // Note: For robots.txt configuration, install @nuxtjs/robots module with:
  // npm install --save-dev @nuxtjs/robots
  // Then add the module to the modules array and configure it
});
