<script setup lang="ts">
import { computed, ref } from "vue";
import { useIntersectionObserver, usePreferredReducedMotion } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Sparkles, Trophy, Users } from "lucide-vue-next";

/** CLASYPCS 2026 Hackathon — Google Form */
const HACKATHON_REGISTRATION_URL = "https://forms.gle/A1qctx5QQ9cVmcJB8";

const tracks: {
  title: string;
  description: string;
  badge?: string;
}[] = [
  {
    title: 'Sustainable Tech ("Pura Vida" Track)',
    description:
      "Harness IoT or AI to create solutions for environmental monitoring, smart agriculture, or energy efficiency.",
  },
  {
    title: "FinTech & Inclusion",
    description:
      "Leverage blockchain or secure computing to democratize financial access across Latin America.",
  },
  {
    title: "AI for Social Good",
    description:
      "Use LLMs or Computer Vision to solve pressing civic, healthcare, or educational challenges in our local communities.",
  },
  {
    title: "🚀 Open Innovation",
    description:
      "A wildcard track for pure entrepreneurial disruption. Got a game-changing idea in a different sector? Build it here.",
    badge: "Wildcard",
  },
];

const techPartners = [
  {
    group: "AI Code & UI Generation",
    items: ["You will be able to use sponsors AI tools to get your ideias easily created"],
  },
] as const;

const judging = [
  { label: "Business Viability", pct: 35, detail: "Does it solve a genuine market need? Who pays for it?" },
  { label: "Technical Execution", pct: 30, detail: "How functional is the MVP? Did you use an innovative tech stack?" },
  { label: "Innovation & Creativity", pct: 25, detail: "Does your solution disrupt the Region 9 market?" },
  { label: "Pitch & Presentation", pct: 10, detail: "Can you sell your vision clearly and compellingly?" },
] as const;

const observerOpts = { threshold: 0.12, rootMargin: "0px 0px -8% 0px" };

const prefersReducedMotion = usePreferredReducedMotion();
const allowMotion = computed(() => !prefersReducedMotion.value);

function revealClass(visible: boolean) {
  if (!allowMotion.value) return "opacity-100 translate-y-0";
  return [
    "transition-all duration-700 ease-out",
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
  ].join(" ");
}

const ctaVisible = ref(false);
const ctaRef = ref<HTMLElement | null>(null);
useIntersectionObserver(ctaRef, ([e]) => {
  if (e?.isIntersecting) ctaVisible.value = true;
}, observerOpts);

const introVisible = ref(false);
const introRef = ref<HTMLElement | null>(null);
useIntersectionObserver(introRef, ([e]) => {
  if (e?.isIntersecting) introVisible.value = true;
}, observerOpts);

const tracksVisible = ref(false);
const tracksRef = ref<HTMLElement | null>(null);
useIntersectionObserver(tracksRef, ([e]) => {
  if (e?.isIntersecting) tracksVisible.value = true;
}, observerOpts);

const techVisible = ref(false);
const techRef = ref<HTMLElement | null>(null);
useIntersectionObserver(techRef, ([e]) => {
  if (e?.isIntersecting) techVisible.value = true;
}, observerOpts);

const judgingVisible = ref(false);
const judgingRef = ref<HTMLElement | null>(null);
useIntersectionObserver(judgingRef, ([e]) => {
  if (e?.isIntersecting) judgingVisible.value = true;
}, observerOpts);

const mentorshipVisible = ref(false);
const mentorshipRef = ref<HTMLElement | null>(null);
useIntersectionObserver(mentorshipRef, ([e]) => {
  if (e?.isIntersecting) mentorshipVisible.value = true;
}, observerOpts);

const closingVisible = ref(false);
const closingRef = ref<HTMLElement | null>(null);
useIntersectionObserver(closingRef, ([e]) => {
  if (e?.isIntersecting) closingVisible.value = true;
}, observerOpts);

const registerBtnClass =
  "min-h-14 text-lg px-10 py-6 h-auto w-full sm:w-auto font-semibold shadow-lg transition-all duration-200 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:shadow-xl";
</script>

<template>
  <div class="pb-24 sm:pb-32">
    <!-- Hero -->
    <section class="container relative pt-10 md:pt-16 pb-12 overflow-hidden">
      <div class="hackathon-blob hackathon-blob-a pointer-events-none" aria-hidden="true" />
      <div class="hackathon-blob hackathon-blob-b pointer-events-none" aria-hidden="true" />

      <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <Badge
          variant="outline"
          class="text-sm py-1.5 px-3 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-75 fill-mode-both"
        >
          IEEE CLASYPCS 2026 Hackathon
        </Badge>
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150 fill-mode-both"
        >
          From Code to Startup
        </h1>
        <p
          class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200 fill-mode-both"
        >
          Unlocking Your Potential: Leveraging Innovation and Entrepreneurship in
          Computing Technologies
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300 fill-mode-both"
        >
          <span class="inline-flex items-center gap-1.5">
            <MapPin class="size-4 shrink-0 text-primary" aria-hidden="true" />
            San José, Costa Rica
          </span>
          <span class="hidden sm:inline text-border">|</span>
          <span class="inline-flex items-center gap-1.5">
            <Calendar class="size-4 shrink-0 text-primary" aria-hidden="true" />
            September 2026
          </span>
        </div>
      </div>
    </section>

    <!-- Primary CTAs -->
    <section ref="ctaRef" class="container max-w-3xl mx-auto pb-14">
      <div :class="revealClass(ctaVisible)" class="flex justify-center">
        <Button as-child size="lg" :class="registerBtnClass">
          <a
            :href="HACKATHON_REGISTRATION_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2"
          >
            Register for the Hackathon
          </a>
        </Button>
      </div>
      <p
        :class="revealClass(ctaVisible)"
        class="text-center text-sm text-muted-foreground mt-4 max-w-xl mx-auto"
        :style="allowMotion && ctaVisible ? { transitionDelay: '120ms' } : undefined"
      >
        You will join the Official Hackathon Discord after you register. Developer
        credits and APIs are shared exclusively on our Discord server.
      </p>
    </section>

    <!-- Intro -->
    <section ref="introRef" class="container max-w-3xl mx-auto pb-16 space-y-6">
      <h2 :class="revealClass(introVisible)" class="text-2xl md:text-3xl font-bold text-center">
        Stop Just Coding.
        <span
          class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
        >
          Start Building a Business.
        </span>
      </h2>
      <div
        :class="revealClass(introVisible)"
        class="space-y-4 text-muted-foreground text-lg leading-relaxed"
        :style="allowMotion && introVisible ? { transitionDelay: '80ms' } : undefined"
      >
        <p>
          Welcome to the CLASYPCS 2026 Hackathon, a flexible 24-hour challenge designed for
          Students and Young Professionals (SYPs) across Latin America. This
          isn't your traditional code-only hackathon. We are challenging you to
          move beyond the terminal and build a Minimum Viable Product (MVP) with
          real market potential.
        </p>
        <p class="text-foreground font-medium">
          If you have the technical skills and the entrepreneurial drive to
          disrupt the status quo, this is your launchpad.
        </p>
      </div>
    </section>

    <!-- Tracks -->
    <section ref="tracksRef" class="container pb-16">
      <div
        :class="revealClass(tracksVisible)"
        class="text-center mb-10 md:mb-12"
      >
        <div class="inline-flex items-center gap-2 text-primary mb-2">
          <Sparkles
            class="size-5 animate-pulse sparkle-wiggle motion-reduce:animate-none"
            aria-hidden="true"
          />
          <span class="text-sm font-semibold uppercase tracking-wide"
            >The Challenge</span
          >
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">Challenge Tracks</h2>
        <p class="text-muted-foreground mt-2 max-w-xl mx-auto">
          Choose your domain and build a solution that addresses real-world
          problems in Region 9.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
        <Card
          v-for="(track, index) in tracks"
          :key="track.title"
          :class="[
            'border-border/80 bg-card/50 backdrop-blur-sm motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg transition-all duration-300',
            revealClass(tracksVisible),
          ]"
          :style="
            allowMotion && tracksVisible
              ? { transitionDelay: `${index * 60}ms` }
              : undefined
          "
        >
          <CardHeader>
            <div class="flex items-start justify-between gap-2">
              <CardTitle class="text-lg leading-snug">{{ track.title }}</CardTitle>
              <Badge v-if="track.badge" variant="secondary">{{ track.badge }}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-base leading-relaxed">
              {{ track.description }}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Tech stack -->
    <section ref="techRef" class="container pb-16">
      <div
        :class="[
          'max-w-4xl mx-auto rounded-2xl border bg-muted/30 dark:bg-card/40 p-8 md:p-10',
          revealClass(techVisible),
        ]"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
          <span class="text-xl" aria-hidden="true">🛠️</span>
          The Ultimate Builder’s Tech Stack
        </h2>
        <p class="text-muted-foreground mb-8 leading-relaxed">
          We know 24 hours is fast. To help you focus on business viability and
          rapid prototyping, we are partnering with top-tier tech platforms to
          provide our hackers with exclusive access and credits to next-generation
          AI and automation tools:
        </p>
        <ul class="space-y-6">
          <li v-for="block in techPartners" :key="block.group">
            <p class="font-semibold text-foreground mb-1">{{ block.group }}</p>
            <p class="text-muted-foreground">
              {{ block.items.join(", ") }}
            </p>
          </li>
        </ul>
        <p class="mt-8 text-sm text-muted-foreground border-t pt-6">
          Access to developer credits and APIs will be distributed exclusively
          through our official Discord server.
        </p>
      </div>
    </section>

    <!-- Judging -->
    <section ref="judgingRef" class="container pb-16 max-w-3xl mx-auto">
      <div
        :class="revealClass(judgingVisible)"
        class="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start"
      >
        <Trophy class="size-5" aria-hidden="true" />
        <span class="text-sm font-semibold uppercase tracking-wide">Judging</span>
      </div>
      <h2
        :class="revealClass(judgingVisible)"
        class="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left"
        :style="allowMotion && judgingVisible ? { transitionDelay: '60ms' } : undefined"
      >
        How You Will Be Judged
      </h2>
      <p
        :class="revealClass(judgingVisible)"
        class="text-muted-foreground mb-8 text-center md:text-left leading-relaxed"
        :style="allowMotion && judgingVisible ? { transitionDelay: '100ms' } : undefined"
      >
        Our judging panel consists of technical gurus and business catalysts. You
        won't just submit a GitHub repo; you will deliver a 3-minute pitch
        demonstrating your live MVP.
      </p>
      <ul class="space-y-6">
        <li v-for="(row, index) in judging" :key="row.label">
          <div class="flex justify-between items-baseline gap-4 mb-1.5">
            <span class="font-medium">{{ row.label }}</span>
            <span class="text-primary font-bold tabular-nums">{{ row.pct }}%</span>
          </div>
          <div
            class="h-2 rounded-full bg-muted overflow-hidden mb-2"
            role="presentation"
          >
            <div
              class="h-full rounded-full bg-gradient-to-r from-[#D247BF] to-primary origin-left"
              :class="
                allowMotion
                  ? 'transition-transform duration-1000 ease-out ' +
                    (judgingVisible ? 'scale-x-100' : 'scale-x-0')
                  : ''
              "
              :style="{
                width: `${row.pct}%`,
                transitionDelay:
                  allowMotion && judgingVisible ? `${index * 120}ms` : '0ms',
              }"
            />
          </div>
          <p class="text-sm text-muted-foreground">{{ row.detail }}</p>
        </li>
      </ul>
    </section>

    <!-- Mentorship -->
    <section ref="mentorshipRef" class="container pb-16 max-w-3xl mx-auto">
      <div
        :class="revealClass(mentorshipVisible)"
        class="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start"
      >
        <Users class="size-5" aria-hidden="true" />
        <span class="text-sm font-semibold uppercase tracking-wide"
          >Support</span
        >
      </div>
      <h2
        :class="revealClass(mentorshipVisible)"
        class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left"
        :style="allowMotion && mentorshipVisible ? { transitionDelay: '70ms' } : undefined"
      >
        Mentorship That Matters
      </h2>
      <p
        :class="revealClass(mentorshipVisible)"
        class="text-muted-foreground text-lg leading-relaxed"
        :style="allowMotion && mentorshipVisible ? { transitionDelay: '130ms' } : undefined"
      >
        Stuck on a bug or idea? Need to refine your business model canvas? We have
        you covered. Our dedicated team of mentors and Business Catalysts will be
        available 24/7 on the floor and via Discord to help you validate your
        market, talk about your architecture, and polish your final pitch.
      </p>
    </section>

    <!-- Closing + CTAs -->
    <section ref="closingRef" class="container max-w-3xl mx-auto text-center space-y-8">
      <div class="space-y-3" :class="revealClass(closingVisible)">
        <h2 class="text-2xl md:text-3xl font-bold">Ready to Build?</h2>
        <p class="text-muted-foreground text-lg leading-relaxed">
          Don't wait for the opening ceremony. Start networking, finding your
          co-founders, and brainstorming ideas today.
        </p>
      </div>
      <div
        :class="revealClass(closingVisible)"
        class="flex justify-center pb-4"
        :style="allowMotion && closingVisible ? { transitionDelay: '140ms' } : undefined"
      >
        <Button as-child size="lg" :class="registerBtnClass">
          <a
            :href="HACKATHON_REGISTRATION_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2"
          >
            Register for the Hackathon
          </a>
        </Button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hackathon-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(64px);
  opacity: 0.22;
  z-index: 0;
}

.hackathon-blob-a {
  width: min(420px, 70vw);
  height: min(320px, 50vw);
  top: -5%;
  left: -10%;
  background: linear-gradient(135deg, hsl(var(--primary) / 0.55), hsl(320 70% 50% / 0.35));
  animation: hackathon-float-a 10s ease-in-out infinite;
}

.hackathon-blob-b {
  width: min(380px, 65vw);
  height: min(280px, 45vw);
  bottom: -15%;
  right: -8%;
  background: linear-gradient(200deg, hsl(var(--primary) / 0.4), hsl(25 95% 55% / 0.3));
  animation: hackathon-float-b 12s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hackathon-blob-a,
  .hackathon-blob-b {
    animation: none;
    opacity: 0.12;
  }
}

@keyframes hackathon-float-a {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(24px, 18px) scale(1.06);
  }
}

@keyframes hackathon-float-b {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-20px, -14px) scale(1.05);
  }
}

@keyframes sparkle-wiggle {
  0%,
  100% {
    transform: rotate(-6deg);
  }
  50% {
    transform: rotate(6deg);
  }
}

.sparkle-wiggle {
  animation: sparkle-wiggle 2.8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .sparkle-wiggle {
    animation: none;
  }
}
</style>
