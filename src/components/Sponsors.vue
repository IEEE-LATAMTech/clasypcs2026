<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-vue-next";

const sponsorMailto = (() => {
  const subject = encodeURIComponent("Sponsorship Inquiry - CLASYPCS 2026");
  const body = encodeURIComponent(
`Hello CLASYPCS 2026 Team,

I am interested in becoming a sponsor for CLASYPCS 2026.

Company Name:
Contact Person:
Phone:
Website:
Areas of Interest:

Additional Message:


Best regards,`
  );
  return `mailto:ieee.clasypcs@gmail.com?cc=cristobal.arroyo%40ieee.org&subject=${subject}&body=${body}`;
})();
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Our Sponsors</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div class="flex items-center gap-12 px-6">
          <img
            src="/IEEE-CS_LogoTM-white.png"
            alt="IEEE Computer Society"
            class="h-12 object-contain"
          />
        </div>
      </Marquee>
    </div>

    <div class="text-center mt-12">
      <div class="p-6 bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-xl border border-primary/20">
        <h3 class="text-xl font-bold mb-2">Want to be a Sponsor?</h3>
        <p class="text-muted-foreground mb-4">
          Join us as a sponsor and showcase your brand to the next generation of tech leaders
        </p>
        <Button
          as-child
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D247BF] to-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <a :href="sponsorMailto" class="flex items-center gap-2">
            <Mail class="w-4 h-4" />
            Contact Us
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>
