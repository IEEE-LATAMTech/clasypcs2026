<script setup lang="ts">
import { computed, nextTick, onWatcherCleanup, ref, watch } from "vue";
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

/** Fills progress bars after section is visible so scale animation is not hidden by li opacity */
const judgingBarsFill = ref(false);

watch(
  judgingVisible,
  async (visible) => {
    if (!visible) {
      judgingBarsFill.value = false;
      return;
    }
    if (!allowMotion.value) {
      judgingBarsFill.value = true;
      return;
    }
    judgingBarsFill.value = false;
    await nextTick();
    const timeoutId = window.setTimeout(() => {
      judgingBarsFill.value = true;
    }, 120);
    onWatcherCleanup(() => clearTimeout(timeoutId));
  },
  { immediate: true },
);

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
  "min-h-14 text-lg px-10 py-6 h-auto w-full sm:w-auto font-semibold shadow-lg transition-all duration-200 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:shadow-xl register-shimmer";

function rowRevealClass(visible: boolean) {
  if (!allowMotion.value) return "opacity-100 translate-x-0";
  return [
    "transition-all duration-600 ease-out will-change-transform",
    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3",
  ].join(" ");
}
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
          class="text-sm py-1.5 px-3 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-75 fill-mode-both badge-orbit"
        >
          IEEE CLASYPCS 2026 Hackathon
        </Badge>
        <h1
          :class="[
            'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150 fill-mode-both',
            allowMotion ? 'hackathon-h1-shimmer' : '',
          ]"
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
            <MapPin
              :class="[
                'size-4 shrink-0 text-primary',
                allowMotion ? 'hero-icon-pop hero-icon-pop-delay-a' : '',
              ]"
              aria-hidden="true"
            />
            San José, Costa Rica
          </span>
          <span class="hidden sm:inline text-border">|</span>
          <span class="inline-flex items-center gap-1.5">
            <Calendar
              :class="[
                'size-4 shrink-0 text-primary',
                allowMotion ? 'hero-icon-pop hero-icon-pop-delay-b' : '',
              ]"
              aria-hidden="true"
            />
            September 2026
          </span>
        </div>
      </div>
    </section>

    <div class="section-flow motion-reduce:opacity-60" aria-hidden="true" />

    <!-- Primary CTAs -->
    <section ref="ctaRef" class="container max-w-3xl mx-auto pb-14">
      <div :class="revealClass(ctaVisible)" class="flex justify-center">
        <Button as-child size="lg" :class="registerBtnClass">
          <a
            :href="HACKATHON_REGISTRATION_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 relative overflow-hidden rounded-md"
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
          :class="
            allowMotion
              ? 'hackathon-gradient-live text-transparent bg-clip-text inline-block'
              : 'text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text'
          "
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
        </div>
        <h2
          :class="[
            'text-2xl md:text-3xl font-bold inline-block relative tracks-title-accent',
            tracksVisible ? 'tracks-title-accent-visible' : '',
          ]"
        >
          Challenge Tracks
        </h2>
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
            'border-border/80 bg-card/50 backdrop-blur-sm motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:hover:border-primary/30 transition-all duration-300 track-card-glint',
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

    <div class="section-flow motion-reduce:opacity-60" aria-hidden="true" />

    <!-- Tech stack -->
    <section ref="techRef" class="container pb-16">
      <div
        :class="[
          'max-w-4xl mx-auto rounded-2xl border bg-muted/30 dark:bg-card/40 p-8 md:p-10 relative overflow-hidden tech-stack-panel',
          revealClass(techVisible),
          techVisible && allowMotion ? 'tech-stack-breathe' : '',
        ]"
      >
        <div class="tech-stack-grid-bg pointer-events-none motion-reduce:hidden" aria-hidden="true" />
        <h2 class="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2 relative z-[1]">
          <span class="text-xl tool-emoji-bob" aria-hidden="true">🛠️</span>
          The Ultimate Builder’s Tech Stack
        </h2>
        <p class="text-muted-foreground mb-8 leading-relaxed relative z-[1]">
          We know 24 hours is fast. To help you focus on business viability and
          rapid prototyping, we are partnering with top-tier tech platforms to
          provide our hackers with exclusive access and credits to next-generation
          AI and automation tools:
        </p>
        <ul class="space-y-6 relative z-[1]">
          <li v-for="block in techPartners" :key="block.group">
            <p class="font-semibold text-foreground mb-1">{{ block.group }}</p>
            <p class="text-muted-foreground">
              {{ block.items.join(", ") }}
            </p>
          </li>
        </ul>
        <p class="mt-8 text-sm text-muted-foreground border-t pt-6 relative z-[1]">
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
        <Trophy
          :class="[
            'size-5',
            judgingVisible && allowMotion ? 'trophy-bob' : '',
          ]"
          aria-hidden="true"
        />
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
          <div
            :class="rowRevealClass(judgingVisible)"
            :style="
              allowMotion && judgingVisible
                ? { transitionDelay: `${index * 85}ms` }
                : undefined
            "
          >
            <div class="flex justify-between items-baseline gap-4 mb-1.5">
              <span class="font-medium">{{ row.label }}</span>
              <span class="text-primary font-bold tabular-nums">{{ row.pct }}%</span>
            </div>
          </div>
          <div
            class="h-2.5 md:h-3 rounded-full bg-muted/90 overflow-hidden mb-2 shadow-inner ring-1 ring-border/30"
            role="presentation"
          >
            <div
              :class="[
                'judging-progress-fill h-full rounded-full origin-left relative overflow-hidden',
                allowMotion ? 'judging-progress-motion' : '',
                allowMotion
                  ? judgingVisible && judgingBarsFill
                    ? 'scale-x-100 judging-progress-active'
                    : 'scale-x-0'
                  : '',
              ]"
              :style="{
                width: `${row.pct}%`,
                transitionDelay:
                  allowMotion && judgingBarsFill
                    ? `${index * 130}ms`
                    : '0ms',
                '--judging-stagger': `${index * 0.22}s`,
              }"
            />
          </div>
          <div
            :class="rowRevealClass(judgingVisible)"
            :style="
              allowMotion && judgingVisible
                ? { transitionDelay: `${index * 85 + 40}ms` }
                : undefined
            "
          >
            <p class="text-sm text-muted-foreground">{{ row.detail }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Mentorship -->
    <section ref="mentorshipRef" class="container pb-16 max-w-3xl mx-auto">
      <div
        :class="revealClass(mentorshipVisible)"
        class="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start"
      >
        <Users
          :class="[
            'size-5',
            mentorshipVisible && allowMotion ? 'mentor-ring' : '',
          ]"
          aria-hidden="true"
        />
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

    <div class="section-flow motion-reduce:opacity-60" aria-hidden="true" />

    <!-- Closing + CTAs -->
    <section ref="closingRef" class="container max-w-3xl mx-auto text-center space-y-8">
      <div class="space-y-3" :class="revealClass(closingVisible)">
        <h2
          :class="[
            'text-2xl md:text-3xl font-bold',
            allowMotion ? 'closing-headline-glow' : '',
          ]"
        >
          Ready to Build?
        </h2>
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
            class="inline-flex items-center justify-center gap-2 relative overflow-hidden rounded-md"
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

/* --- Extra motion (respect global reduce in each block) --- */

.hackathon-h1-shimmer {
  background-image: linear-gradient(
    115deg,
    hsl(var(--foreground)) 0%,
    hsl(var(--foreground)) 38%,
    hsl(var(--primary)) 48%,
    hsl(320 78% 62%) 52%,
    hsl(var(--foreground)) 62%,
    hsl(var(--foreground)) 100%
  );
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: hackathon-text-shine 5.5s linear infinite;
}

.hackathon-gradient-live {
  background-image: linear-gradient(
    95deg,
    #d247bf 0%,
    hsl(var(--primary)) 35%,
    hsl(25 95% 58%) 55%,
    #d247bf 85%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: hackathon-text-shine 7s ease-in-out infinite;
}

@keyframes hackathon-text-shine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.badge-orbit {
  animation: badge-orbit-glow 3.2s ease-in-out infinite;
}

@keyframes badge-orbit-glow {
  0%,
  100% {
    box-shadow: 0 0 0 0 hsl(var(--primary) / 0);
  }
  50% {
    box-shadow: 0 0 0 3px hsl(var(--primary) / 0.18), 0 0 18px hsl(var(--primary) / 0.12);
  }
}

.hero-icon-pop {
  animation: hero-icon-pop 0.65s cubic-bezier(0.34, 1.45, 0.64, 1) forwards;
  opacity: 0;
}

.hero-icon-pop-delay-a {
  animation-delay: 0.45s;
}

.hero-icon-pop-delay-b {
  animation-delay: 0.55s;
}

@keyframes hero-icon-pop {
  from {
    transform: scale(0.35) rotate(-14deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.section-flow {
  height: 2px;
  max-width: min(90%, 28rem);
  margin: 0 auto 2.5rem;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    hsl(var(--primary) / 0.25),
    transparent
  );
  position: relative;
  overflow: hidden;
}

.section-flow::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent,
    hsl(var(--primary) / 0.85),
    transparent
  );
  animation: section-flow-scan 3.8s ease-in-out infinite;
}

@keyframes section-flow-scan {
  0%,
  100% {
    transform: translateX(-40%);
    opacity: 0.25;
  }
  50% {
    transform: translateX(220%);
    opacity: 1;
  }
}

.tracks-title-accent::after {
  content: "";
  display: block;
  height: 3px;
  margin-top: 0.45rem;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    hsl(var(--primary) / 0.9),
    hsl(320 70% 55% / 0.7),
    transparent
  );
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
}

.tracks-title-accent-visible::after {
  transform: scaleX(1);
}

.track-card-glint {
  position: relative;
  overflow: hidden;
}

.track-card-glint::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 38%,
    rgba(255, 255, 255, 0.07) 50%,
    transparent 62%
  );
  transform: translateX(-100%);
  transition: transform 0.65s ease;
  pointer-events: none;
}

.track-card-glint:hover::before {
  transform: translateX(100%);
}

.tech-stack-panel {
  isolation: isolate;
}

.tech-stack-grid-bg {
  position: absolute;
  inset: 0;
  opacity: 0.055;
  background-image: linear-gradient(
      hsl(var(--primary) / 0.45) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, hsl(var(--primary) / 0.45) 1px, transparent 1px);
  background-size: 36px 36px;
  animation: tech-grid-drift 22s linear infinite;
}

@keyframes tech-grid-drift {
  to {
    background-position: 36px 36px;
  }
}

.tech-stack-breathe {
  animation: tech-stack-breathe 4.5s ease-in-out infinite;
}

@keyframes tech-stack-breathe {
  0%,
  100% {
    box-shadow: 0 0 0 0 hsl(var(--primary) / 0);
  }
  50% {
    box-shadow: 0 0 48px -12px hsl(var(--primary) / 0.14);
  }
}

.tool-emoji-bob {
  display: inline-block;
  animation: tool-emoji-bob 2.4s ease-in-out infinite;
}

@keyframes tool-emoji-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.trophy-bob {
  animation: trophy-bob 2.1s ease-in-out infinite;
}

@keyframes trophy-bob {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  35% {
    transform: translateY(-4px) rotate(-4deg);
  }
  70% {
    transform: translateY(-2px) rotate(4deg);
  }
}

.mentor-ring {
  animation: mentor-halo 3s ease-in-out infinite;
}

@keyframes mentor-halo {
  0%,
  100% {
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    filter: drop-shadow(0 0 8px hsl(var(--primary) / 0.5));
  }
}

.closing-headline-glow {
  animation: closing-pulse 3.2s ease-in-out infinite;
}

@keyframes closing-pulse {
  0%,
  100% {
    text-shadow: 0 0 0 transparent;
  }
  50% {
    text-shadow: 0 0 32px hsl(var(--primary) / 0.4);
  }
}

.register-shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -55%;
  width: 45%;
  transform: skewX(-14deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.16),
    transparent
  );
  animation: register-shine 3.4s ease-in-out infinite;
}

@keyframes register-shine {
  0% {
    transform: translateX(-20%) skewX(-14deg);
  }
  100% {
    transform: translateX(420%) skewX(-14deg);
  }
}

/* Judging progress bars — fill + drifting gradient + shine sweep */
.judging-progress-motion {
  transition: transform 1.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.judging-progress-fill {
  background-image: linear-gradient(
    92deg,
    #d247bf 0%,
    hsl(var(--primary)) 38%,
    hsl(28 96% 58%) 58%,
    hsl(var(--primary)) 78%,
    #d247bf 100%
  );
  background-size: 240% 100%;
  background-position: 0% 50%;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.judging-progress-fill.judging-progress-active {
  animation: judging-bg-drift 4.2s ease-in-out infinite;
  animation-delay: var(--judging-stagger, 0s);
}

@keyframes judging-bg-drift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.judging-progress-fill::after {
  content: "";
  position: absolute;
  top: -35%;
  bottom: -35%;
  left: 0;
  width: 42%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 45%,
    transparent 100%
  );
  transform: skewX(-16deg) translateX(-220%);
  opacity: 0;
  pointer-events: none;
}

.judging-progress-fill.judging-progress-active::after {
  animation: judging-bar-shimmer 2.75s ease-in-out infinite;
  animation-delay: calc(var(--judging-stagger, 0s) + 0.4s);
}

@keyframes judging-bar-shimmer {
  0% {
    transform: skewX(-16deg) translateX(-220%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: skewX(-16deg) translateX(420%);
    opacity: 0.25;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hackathon-h1-shimmer,
  .hackathon-gradient-live {
    animation: none;
    background-size: 100% auto;
    background-position: 0 center;
  }

  .badge-orbit {
    animation: none;
    box-shadow: none;
  }

  .hero-icon-pop,
  .hero-icon-pop-delay-a,
  .hero-icon-pop-delay-b {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .section-flow::after {
    animation: none;
    opacity: 0.5;
    transform: none;
  }

  .track-card-glint::before {
    display: none;
  }

  .tech-stack-grid-bg {
    animation: none;
  }

  .tech-stack-breathe {
    animation: none;
  }

  .tool-emoji-bob,
  .trophy-bob,
  .mentor-ring,
  .closing-headline-glow {
    animation: none;
  }

  .register-shimmer::after {
    display: none;
  }

  .judging-progress-fill.judging-progress-active {
    animation: none;
    background-position: 0% 50%;
  }

  .judging-progress-fill.judging-progress-active::after {
    display: none;
    animation: none;
  }
}
</style>
