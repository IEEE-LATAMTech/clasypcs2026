<script setup lang="ts">
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
  { group: "AI Code & UI Generation", items: ["You will be able to use sponsors AI tools to get your ideias easily created"] },
] as const;

const judging = [
  { label: "Business Viability", pct: 35, detail: "Does it solve a genuine market need? Who pays for it?" },
  { label: "Technical Execution", pct: 30, detail: "How functional is the MVP? Did you use an innovative tech stack?" },
  { label: "Innovation & Creativity", pct: 25, detail: "Does your solution disrupt the Region 9 market?" },
  { label: "Pitch & Presentation", pct: 10, detail: "Can you sell your vision clearly and compellingly?" },
] as const;
</script>

<template>
  <div class="pb-24 sm:pb-32">
    <!-- Hero -->
    <section class="container pt-10 md:pt-16 pb-12">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" class="text-sm py-1.5 px-3">
          IEEE CLASYPCS 2026 Hackathon
        </Badge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          From Code to Startup
        </h1>
        <p
          class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Unlocking Your Potential: Leveraging Innovation and Entrepreneurship in
          Computing Technologies
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
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
    <section class="container max-w-3xl mx-auto pb-14">
      <div class="flex justify-center">
        <Button
          as-child
          size="lg"
          class="min-h-14 text-lg px-10 py-6 h-auto w-full sm:w-auto font-semibold shadow-lg"
        >
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
      <p class="text-center text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
        You will join the Official Hackathon Discord after you register. Developer
        credits and APIs are shared exclusively on our Discord server.
      </p>
    </section>

    <!-- Intro -->
    <section class="container max-w-3xl mx-auto pb-16 space-y-6">
      <h2 class="text-2xl md:text-3xl font-bold text-center">
        Stop Just Coding.
        <span
          class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
        >
          Start Building a Business.
        </span>
      </h2>
      <div class="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
    <section class="container pb-16">
      <div class="text-center mb-10 md:mb-12">
        <div class="inline-flex items-center gap-2 text-primary mb-2">
          <Sparkles class="size-5" aria-hidden="true" />
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
          v-for="track in tracks"
          :key="track.title"
          class="border-border/80 bg-card/50 backdrop-blur-sm"
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
    <section class="container pb-16">
      <div class="max-w-4xl mx-auto rounded-2xl border bg-muted/30 dark:bg-card/40 p-8 md:p-10">
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
    <section class="container pb-16 max-w-3xl mx-auto">
      <div class="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start">
        <Trophy class="size-5" aria-hidden="true" />
        <span class="text-sm font-semibold uppercase tracking-wide">Judging</span>
      </div>
      <h2 class="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
        How You Will Be Judged
      </h2>
      <p class="text-muted-foreground mb-8 text-center md:text-left leading-relaxed">
        Our judging panel consists of technical gurus and business catalysts. You
        won't just submit a GitHub repo; you will deliver a 3-minute pitch
        demonstrating your live MVP.
      </p>
      <ul class="space-y-6">
        <li v-for="row in judging" :key="row.label">
          <div class="flex justify-between items-baseline gap-4 mb-1.5">
            <span class="font-medium">{{ row.label }}</span>
            <span class="text-primary font-bold tabular-nums">{{ row.pct }}%</span>
          </div>
          <div
            class="h-2 rounded-full bg-muted overflow-hidden mb-2"
            role="presentation"
          >
            <div
              class="h-full rounded-full bg-gradient-to-r from-[#D247BF] to-primary"
              :style="{ width: `${row.pct}%` }"
            />
          </div>
          <p class="text-sm text-muted-foreground">{{ row.detail }}</p>
        </li>
      </ul>
    </section>

    <!-- Mentorship -->
    <section class="container pb-16 max-w-3xl mx-auto">
      <div class="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start">
        <Users class="size-5" aria-hidden="true" />
        <span class="text-sm font-semibold uppercase tracking-wide"
          >Support</span
        >
      </div>
      <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
        Mentorship That Matters
      </h2>
      <p class="text-muted-foreground text-lg leading-relaxed">
        Stuck on a bug or idea? Need to refine your business model canvas? We have
        you covered. Our dedicated team of mentors and Business Catalysts will be
        available 24/7 on the floor and via Discord to help you validate your
        market, talk about your architecture, and polish your final pitch.
      </p>
    </section>

    <!-- Closing + CTAs -->
    <section class="container max-w-3xl mx-auto text-center space-y-8">
      <div class="space-y-3">
        <h2 class="text-2xl md:text-3xl font-bold">Ready to Build?</h2>
        <p class="text-muted-foreground text-lg leading-relaxed">
          Don't wait for the opening ceremony. Start networking, finding your
          co-founders, and brainstorming ideas today.
        </p>
      </div>
      <div class="flex justify-center pb-4">
        <Button
          as-child
          size="lg"
          class="min-h-14 text-lg px-10 py-6 h-auto w-full sm:w-auto font-semibold shadow-lg"
        >
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
