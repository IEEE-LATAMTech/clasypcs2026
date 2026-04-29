<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Lightbulb } from "lucide-vue-next";
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-6 mx-auto py-12 md:py-20"
    >
      <!-- Logos row -->
      <div class="flex items-center justify-center gap-8 flex-wrap">
        <img
          src="/ieee_mb_white.png"
          alt="IEEE"
          class="h-10 object-contain"
        />
        <img
          src="/logo-IEEE-CS-80th-FINAL_Orange_White.png"
          alt="IEEE Computer Society 80th Anniversary"
          class="h-12 object-contain"
        />
      </div>

      <div class="text-center space-y-5">
        <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 text-primary">
            <Badge>Enjoy</Badge>
          </span>
          <span> the experience </span>
        </Badge>

        <div
          class="max-w-screen-md mx-auto text-center text-4xl md:text-5xl font-bold"
        >
          <h1>
            Live with us
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >CLASYPCS 2026
            </span>
            in San José, Costa Rica 21-22 Sep
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-lg text-muted-foreground">
          The biggest SYP event in Region 9 — centered around <em>Unlocking Your Potential: Leveraging Innovation and Entrepreneurship in Computing Technologies</em>.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button as-child class="w-5/6 md:w-1/4 font-bold group/arrow">
            <a href="#pricing">
              See registration &amp; pricing
              <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="mode == 'light' ? 'BannerBecas.jpeg' : 'BannerBecas.jpeg'"
          alt="CLASYPCS 2026 Banner"
        />

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>

      <!-- About CLASYPCS -->
      <div class="max-w-4xl mx-auto mt-8 bg-muted/60 dark:bg-card rounded-xl border border-border p-8">
        <h2 class="text-2xl font-bold mb-4 text-center">About CLASYPCS</h2>
        <p class="text-muted-foreground text-center leading-relaxed mb-8">
          The <strong class="text-foreground">IEEE Congress of Latin American Students &amp; Young Professionals of Computer Society (CLASYPCS)</strong> is the biggest SYP event in IEEE Region 9, which aims to boost and kickstart the professional career of Students and Young Professionals from Computer Society.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <Calendar class="w-6 h-6 text-primary" />
            <p class="text-sm font-semibold">Date &amp; Time</p>
            <p class="text-sm text-muted-foreground">21–22 September, 2026<br><span class="text-xs">Check-in: September 20th</span></p>
          </div>
          <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <MapPin class="w-6 h-6 text-primary" />
            <p class="text-sm font-semibold">Location / Venue</p>
            <p class="text-sm text-muted-foreground">Four Points by Sheraton<br>San José, Costa Rica</p>
          </div>
          <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <Lightbulb class="w-6 h-6 text-primary" />
            <p class="text-sm font-semibold">Theme</p>
            <p class="text-sm text-muted-foreground italic">Unlocking Your Potential: Leveraging Innovation and Entrepreneurship in Computing Technologies</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
