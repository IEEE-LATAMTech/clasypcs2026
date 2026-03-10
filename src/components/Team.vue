<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";
import InstagramIcon from "@/icons/InstagramIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Cristóbal",
    lastName: "Arroyo",
    positions: ["Event Chair"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Joseph",
    lastName: "Rojas",
    positions: ["Program Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Ariana",
    lastName: "Garcia",
    positions: ["Finance Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Esteban",
    lastName: "Arias",
    positions: ["Logistics Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Paula",
    lastName: "Londoño",
    positions: ["Marketing Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Pedro",
    lastName: "Yannoulas",
    positions: ["Financial Committee"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Cinthya",
    lastName: "Ramon",
    positions: ["Financial Committee"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/ale.jpeg",
    firstName: "Alejandra",
    lastName: "Ponce",
    positions: ["Marketing Committee"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alejandra-ponce-a94a36280/",
      },
    ],
  },
  {
    imageUrl: "/imagenesTeam/michel.jpeg",
    firstName: "Michel",
    lastName: "Adelino",
    positions: ["Program Committee"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michel-adelino/",
      },
    ],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Amanda",
    lastName: "Calderón",
    positions: ["Marketing & Local Committee"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    firstName: "Natasha",
    lastName: "Urdaneta",
    positions: ["Program Committee"],
    socialNetworks: [],
  },
  {
    imageUrl: "/imagenesTeam/waldir.jpeg",
    firstName: "Waldir",
    lastName: "Ventura Filho",
    positions: ["Advisor"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waldir-ventura-filho/",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;

    case "Github":
      return GithubIcon;

    case "X":
      return XIcon;
    
      case "Instagram":
      return InstagramIcon;
  }
};
</script>

<template>
  <section
    id="team"
    class="container lg:w-[75%] py-10 sm:py-14"
  >
    <div class="text-center mb-4">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Team</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        The CLASYPCS 2026 Team
      </h2>
    </div>

    <div 
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${name} page`"
          >
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
