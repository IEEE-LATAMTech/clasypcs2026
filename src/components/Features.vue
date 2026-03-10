<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  Globe,
  Brain,
  Ear,
  Handshake,
  Target,
  Palette,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "globe",
    title: "Global Perspective",
    description:
      "Participate in workshops with students and professionals from all over the world. Collaborate on ideas that transcend borders.",
  },
  {
    icon: "brain",
    title: "Future-Ready Skills",
    description:
      "Master soft skills that matter: communication, leadership, adaptability, and personal branding — essential for tomorrow's workforce.",
  },
  {
    icon: "ear",
    title: " Inspiring Speakers",
    description:
      "Learn directly from leaders, innovators, and changemakers who are shaping industries and communities worldwide.",
  },
  {
    icon: "handshake",
    title: "Real Networking",
    description:
      "Meet peers, mentors, and recruiters in dynamic networking spaces. Build meaningful connections for life and career.",
  },
  {
    icon: "target",
    title: "Purpose-Driven Content",
    description:
      "Every session is designed to equip you with actionable insights — no fluff, just real value tailored to your growth.",
  },
  {
    icon: "palette",
    title: "Personalized Experience",
    description:
      "Choose your track. Customize your schedule. This isn’t a one-size-fits-all event — it’s your journey, your way.",
  },
];

const iconMap: Record<
  string,
  | typeof Globe
  | typeof Brain
  | typeof Ear
  | typeof Handshake
  | typeof Paintbrush
  | typeof Target
  | typeof MessageCircle
  | typeof Palette
> = {
  globe: Globe,
  brain: Brain,
  ear: Ear,
  handshake: Handshake,
  paintbrush: Paintbrush,
  target: Target,
  messageCircle: MessageCircle,
  palette: Palette,
};
</script>

<template>
  <section
    id="features"
    class="container py-10 sm:py-14"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      What Makes Us Different
    </h2>

    <h3 class="md:w-1/2 mx-auto text-base text-center text-muted-foreground mb-5">
      A launchpad for your global potential — designed to challenge, connect, and inspire.

    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
