<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "🏨 Hotel Accommodation Included",
    description:
      "Stay at the Four Points by Sheraton San José Costa Rica, a premium hotel just minutes from downtown San José. Connect with fellow attendees and make the most of every moment.",
    pro: 0,
  },
  {
    title: "🏛️ Professional Event Venue",
    description:
      "All sessions and activities will be held in a fully equipped conference hall, ideal for workshops, talks, and networking opportunities.",
    pro: 0,
  },
  {
    title: "🌿 Costa Rica Vibes",
    description: "Experience the warmth of Costa Rica — Pura Vida! Explore local culture, food, and natural beauty just steps away from your accommodation.",
    pro: 0 ,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-10 sm:py-14"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Ubication
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Where the Experience Happens    </h2>
    <h3 class="md:w-1/2 mx-auto text-base text-center text-muted-foreground mb-6">
      Our event takes place at the
      <a href="https://www.marriott.com/en-us/hotels/sjofp-four-points-san-jose-costa-rica/overview/" target="_blank" rel="noopener noreferrer" class="text-primary underline">Four Points by Sheraton San José Costa Rica</a> — Pura Vida!
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
