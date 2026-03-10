<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Contact,
  Tag,
  Paintbrush,
  Earth,
  Rocket,
  Shrub,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "earth",
    title: "International collaboration",
    description:
      "Join interactive workshops with people from around the globe. Share ideas, work on cross-cultural projects, and broaden your professional horizons.",
  },
  {
    icon: "rocket",
    title: "Authentic leadership",
    description:
      "Inspiring talks on how to lead with purpose. Learn to make impactful decisions, motivate others, and become a positive influence in your environment..",
  },
  {
    icon: "shrub",
    title: "Personal growth & professional branding",
    description:
      "Learn how to bring out the best version of yourself. From digital presence to interpersonal skills, build a personal brand that opens doors.",
  },
  {
    icon: "contact",
    title: " Networking & new opportunities",
    description:
      "Expand your network. Meet like-minded individuals, mentors, and companies looking for talent just like yours.",
  },
];

const iconMap: Record<
  string,
  | typeof Contact
  | typeof Tag
  | typeof Paintbrush
  | typeof Earth
  | typeof Rocket
  | typeof Shrub
> = {
  contact: Contact,
  tag: Tag,
  paintbrush: Paintbrush,
  earth: Earth,
  rocket: Rocket,
  shrub: Shrub,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-10 sm:py-14"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Your springboard to the future
        </h2>
        <p class="text-base text-muted-foreground mb-6">
          Designed for CS students and young professionals to boost their potential, connect with leaders, and stand out in a competitive world.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
