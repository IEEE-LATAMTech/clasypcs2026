<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Contribute",
    title: "Bring Your Voice to the Global Conversation",
    description:
      "Take part in dynamic discussions and workshops where your ideas matter. Share your perspective and contribute to building solutions with impact.",
    image: "Bodoque.svg",
  },
  {
    badgeTitle: "Discover",
    title: "Unlock Your Potential Through New Experiences",
    description:
      "From leadership insights to cultural exchange, every session is designed to expand your mindset and reveal new possibilities for your personal and professional growth.",
    image: "Bodoque02.svg",
  },
  {
    badgeTitle: "Innovate",
    title: "Turn Ideas Into Action",
    description:
      "Challenge yourself to think creatively, solve real-world problems, and co-create with peers from around the world. This is where innovation starts.",
    image: "Bodoque05.svg",
  },
  {
    badgeTitle: "Collaborate",
    title: "Grow Together, Go Further",
    description:
      "Build lasting connections and learn the power of teamwork. This journey is about shared success — because great things happen when we work together.",
    image: "Bodoque08.svg",
  },
];
</script>

<template>
  <section
    id="features"
    class="container py-10 sm:py-14"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        How It Works
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Step-by-Step Journey to Growth
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 "
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
