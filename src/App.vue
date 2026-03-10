<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Sponsors from "./components/Sponsors.vue";
import Team from "./components/Team.vue";
import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import Speakers from "./components/Speakers.vue";
import Pricing from "./components/Pricing.vue";
import DistinguisedGuest from "./components/DistinguisedGuest.vue";
//import AboutUs from "./views/AboutUs.vue";

</script>

<template>
  <Navbar />
  
  <!-- Aquí es donde se renderizarán las vistas según la ruta -->
  <router-view />
  
  <!-- Estos componentes solo se mostrarán en la ruta principal "/" -->
  <template v-if="$route.path === '/'">
    <Hero />
    <Benefits />
    <DistinguisedGuest/>
    <Speakers />
    <Sponsors />
    <Features />
    <Community />
    <Services />
    <HowItWorks />
    <Pricing/>
    <Contact />
    <Team />
    <FAQ />
  </template>
  
  <Footer />
  </template>