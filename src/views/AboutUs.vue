<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

interface SponsorProps {
  image: string;
  name: string;
  alt: string;
}

// Datos para los tres carruseles
const carousel1Sponsors: SponsorProps[] = [
  {
    image: "/imaEven/event.jpg",
    name: "Tech Corp",
    alt: "Tech Corp Logo"
  },
  {
    image: "/imaEven/event2.jpg",
    name: "Innovation Labs",
    alt: "Innovation Labs Logo"
  },
  {
    image: "/imaEven/event3.jpg",
    name: "Digital Solutions",
    alt: "Digital Solutions Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Future Systems",
    alt: "Future Systems Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Smart Tech",
    alt: "Smart Tech Logo"
  }
];

const carousel2Sponsors: SponsorProps[] = [
  {
    image: "/imaEven/event.jpg",
    name: "Cloud Networks",
    alt: "Cloud Networks Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Data Dynamics",
    alt: "Data Dynamics Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "AI Partners",
    alt: "AI Partners Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Cyber Security",
    alt: "Cyber Security Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Quantum Computing",
    alt: "Quantum Computing Logo"
  }
];

const carousel3Sponsors: SponsorProps[] = [
  {
    image: "/imaEven/event.jpg",
    name: "Mobile First",
    alt: "Mobile First Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Web Development",
    alt: "Web Development Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Database Pro",
    alt: "Database Pro Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "DevOps Tools",
    alt: "DevOps Tools Logo"
  },
  {
    image: "/imaEven/event.jpg",
    name: "Software House",
    alt: "Software House Logo"
  }
];
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[90%] mx-auto pb-24 sm:pb-32"
  >
  <br>
  <br>
    <h2 class="text-lg md:text-xl text-center mb-12">Past Editions</h2>

    <div class="space-y-8">
      <!-- Carrusel 1 - Dirección derecha -->
      <div class="w-full overflow-hidden">
        <Marquee
          class="gap-[3rem]"
          :pauseOnHover="true"
          :fade="true"
          :direction="'left'"
          :duration="20"
          innerClassName="gap-[3rem] flex items-center"
        >
          <div
            v-for="sponsor in carousel1Sponsors"
            :key="sponsor.name"
            class="flex items-center justify-center flex-shrink-0"
          >
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <img
                :src="sponsor.image"
                :alt="sponsor.alt"
                class="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Carrusel 2 - Dirección izquierda (FIXED) -->
      <div class="w-full overflow-hidden">
        <Marquee
          class="gap-[3rem]"
          :pauseOnHover="true"
          :fade="true"
          :direction="'left'"
          :duration="25"
          innerClassName="gap-[3rem] flex items-center"
          :reverse="true"
        >
          <div
            v-for="sponsor in carousel2Sponsors"
            :key="sponsor.name"
            class="flex items-center justify-center flex-shrink-0"
          >
            <div class="bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-lg p-4 border border-primary/20 hover:from-[#D247BF]/20 hover:to-primary/20 transition-all duration-300 hover:scale-105">
              <img
                :src="sponsor.image"
                :alt="sponsor.alt"
                class="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Carrusel 3 - Dirección derecha -->
      <div class="w-full overflow-hidden">
        <Marquee
          class="gap-[3rem]"
          :pauseOnHover="true"
          :fade="true"
          :direction="'left'"
          :duration="30"
          innerClassName="gap-[3rem] flex items-center"
        >
          <div
            v-for="sponsor in carousel3Sponsors"
            :key="sponsor.name"
            class="flex items-center justify-center flex-shrink-0"
          >
            <div class="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <img
                :src="sponsor.image"
                :alt="sponsor.alt"
                class="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>

   
  </section>
</template>

<style scoped>
/* Asegurar que todos los marquees mantengan orientación horizontal */
:deep(.vue3-marquee) {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
}

:deep(.vue3-marquee-inner) {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
}

/* Fix específico para direction="right" que causa problemas verticales */
:deep(.vue3-marquee[data-direction="right"]) {
  flex-direction: row !important;
}

:deep(.vue3-marquee[data-direction="right"] .vue3-marquee-inner) {
  flex-direction: row !important;
}
</style>