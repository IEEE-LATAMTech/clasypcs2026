<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import XIcon from "@/icons/XIcon.vue";
import { Mail, ExternalLink } from "lucide-vue-next";

interface GuestProps {
  imageUrl: string;
  name: string;
  title: string;
  company: string;
  specialty: string;
  bio: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const guestsList: GuestProps[] = [
  {
    imageUrl: "/imagenesSpeakers/grace.PNG",
    name: "Grace A Lewis",
    title: "Computer Society President Elect",
    company: "",
    specialty: "Principal Researcher at Software Engineering Institute",
    bio: "",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gracelewis/",
      },
    ],
  },
  {
    imageUrl: "/imagenesSpeakers/andrew.png",
    name: "Andrew Seely",
    title: "Information Technology and Cybersecurity Consultant",
    company: "",
    specialty: "Experienced educator, leader, manager, engineer, and author, with 30 years of progressive accomplishment.",
    bio: "",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andrewseelytampa/",
      },
    ],
  },
  {
    imageUrl: "/imagenesSpeakers/eric.png",
    name: "Eric Berkowitz",
    title: "Senior Membership Marketing Leader",
    company: "",
    specialty: "Strategy, Tactics, Execution, CX and Community Building",
    bio: "",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericberkowitz/",
      },
    ],
  },
  {
    imageUrl: "/imagenesTeam/waldir.jpeg",
    name: "Waldir Ventura",
    title: "IEEE Region 9 Advisor",
    company: "",
    specialty: "Advisor for IEEE Region 9 Student & Young Professional activities",
    bio: "",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waldirventura/",
      },
    ],
  },
  {
    imageUrl: "/imagenesTeam/placeholder.jpg",
    name: "Bishwarup Ray",
    title: "Distinguished Guest",
    company: "",
    specialty: "IEEE Computer Society leader and advocate for student and young professional development",
    bio: "",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bishwarup-ray/",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;
    case "X":
      return XIcon;
    case "Email":
      return Mail;
    case "Website":
      return ExternalLink;
    default:
      return ExternalLink;
  }
};

const getIconColor = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return "text-blue-600 hover:text-blue-700";
    case "X":
      return "text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white";
    case "Email":
      return "text-red-500 hover:text-red-600";
    case "Website":
      return "text-green-600 hover:text-green-700";
    default:
      return "text-gray-600 hover:text-gray-700";
  }
};
</script>

<template>
  <section
    id="guest"
    class="container lg:w-[75%] py-10 sm:py-14"
  >
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Distinguished Guests</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Meet Our 
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Distinguished Guests
        </span>
      </h2>
      <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
        Learn from leaders and visionaries shaping the future through innovation, policy, and education.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Card
        v-for="{
          imageUrl,
          name,
          title,
          company,
          specialty,
          bio,
          socialNetworks,
        } in guestsList"
        :key="name"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hovercard hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 hover:border hover:border-primary/20"
      >
        <CardHeader class="text-center pb-4">
          <div class="mx-auto mb-4 relative">
            <div class="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-[#D247BF] to-primary p-[3px] bg-gradient-to-r from-[#D247BF] to-primary">
              <img
                :src="imageUrl"
                :alt="name"
                class="w-full h-full object-cover rounded-full bg-background"
              />
            </div>
            <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <CardTitle class="text-xl font-bold mb-2">
            {{ name }}
          </CardTitle>
          
          <div class="space-y-1">
            <p class="text-primary font-semibold">{{ title }}</p>
            <p class="text-sm text-muted-foreground">{{ company }}</p>
          </div>
        </CardHeader>

        <CardContent class="flex-1 text-center space-y-4">
          <div class="p-3 bg-primary/10 rounded-lg border border-primary/20">
            <h4 class="font-semibold text-sm text-primary mb-1">Specialty:</h4>
            <p class="text-sm">{{ specialty }}</p>
          </div>

          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ bio }}
          </p>
        </CardContent>

        <CardFooter class="pt-4 pb-6">
          <div class="flex justify-center space-x-4 w-full">
            <a
              v-for="{ name: socialName, url } in socialNetworks"
              :key="socialName"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              :class="`p-2 rounded-full transition-all duration-200 hover:scale-110 ${getIconColor(socialName)} hover:bg-muted`"
              :aria-label="`Visit ${name}'s ${socialName}`"
            >
              <component 
                :is="socialIcon(socialName)" 
                class="w-5 h-5"
              />
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
