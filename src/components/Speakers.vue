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

interface SpeakerProps {
  imageUrl: string;
  name: string;
  title: string;
  company: string;
  talkTopic: string;
  bio: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const speakersList: SpeakerProps[] = [
  {
    imageUrl: "/imagenesSpeakers/kun.png",
    name: "Dr. Luis Kun",
    title: "Life fellow IEEE",
    company: "William Perry Center for Hemispheric Defense Studies",
    talkTopic: "Interdisciplinary Work",
    bio: "Distinguished Professor Emeritus of National Security Affairs.",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luis-kun-047b385/",
      },
    //   {
    //     name: "X",
    //     url: "https://x.com/carlos_ai",
    //   },
    //   {
    //     name: "Email",
    //     url: "mailto:carlos@techinnovation.com",
    //   },
    ],
  },
  {
    imageUrl: "/imagenesSpeakers/george.png",
    name: "Dr. George J Proeller",
    title: "Life member IEEE",
    company: "Information Sistems Security Association",
    talkTopic: "Distinguished Visitor Program(DVP) / Early Career Speaker Program (ECSP)",
    bio: "Distinguished Cyber Security Consultant.",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/george-j-proeller-9baba820/",
      },
    //   {
    //     name: "X",
    //     url: "https://x.com/carlos_ai",
    //   },
    //   {
    //     name: "Email",
    //     url: "mailto:carlos@techinnovation.com",
    //   },
    ],
  },
   {
    imageUrl: "/imagenesSpeakers/donna.png",
    name: "Ms. Donna Roper",
    title: "Broadening Participation",
    company: "University of Panama",
    talkTopic: "Broadening Participation",
    bio: "Master of Science in Information Systems.",
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/donna-roper-36092318/",
      },
    //   {
    //     name: "X",
    //     url: "https://x.com/carlos_ai",
    //   },
    //   {
    //     name: "Email",
    //     url: "mailto:carlos@techinnovation.com",
    //   },
    ],
  },
  //  {
  //   imageUrl: "",
  //   name: "Dr. Yuhong Liu",
  //   title: "TAB & TCs",
  //   company: "IEEE Computer Society Geographic Activities Committee",
  //   talkTopic: "Technical Activities (TAB)/Technical Communities (TCs)",
  //   bio: "Dr of philosophy, Computer Engineering .",
  //   socialNetworks: [
  //     {
  //       name: "LinkedIn",
  //       url: "https://www.linkedin.com/in/yuhong-liu-02537b22/",
  //     },
    //   {
    //     name: "X",
    //     url: "https://x.com/carlos_ai",
    //   },
    //   {
    //     name: "Email",
    //     url: "mailto:carlos@techinnovation.com",
    //   },
  //   ],
  // },
  //  {
  //   imageUrl: "/imagenesSpeakers/andrew.png",
  //   name: "Mr. Andrew Seely",
  //   title: "Computer Society",
  //   company: "Hillsborough Community Collage", 
  //   talkTopic: "Getting to Know the IEEE Computer Society",
  //   bio: "Experienced educator, leader, manager, engineer, and author, with 30 years of progressive accomplishment.",
  //   socialNetworks: [
  //     {
  //       name: "LinkedIn",
  //       url: "https://www.linkedin.com/in/andrewseelytampa/",
  //     },
  //   //   {
  //   //     name: "X",
  //   //     url: "https://x.com/carlos_ai",
  //   //   },
  //   //   {
  //   //     name: "Email",
  //   //     url: "mailto:carlos@techinnovation.com",
  //   //   },
  //   ],
  // },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b93c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3",
//     name: "Prof. Maria Santos",
//     title: "IEEE Fellow",
//     company: "Universidad de la República",
//     talkTopic: "Women in Technology: Breaking Barriers",
//     bio: "IEEE Fellow and advocate for diversity in STEM fields with groundbreaking research in robotics.",
//     socialNetworks: [
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/maria-santos",
//       },
//       {
//         name: "Email",
//         url: "mailto:maria.santos@universidad.edu",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
//     name: "Eng. Alberto Fernandez",
//     title: "CTO & Co-founder",
//     company: "StartupTech Solutions",
//     talkTopic: "From Student to Tech Entrepreneur",
//     bio: "Successful entrepreneur who built a $50M company from university dorm room.",
//     socialNetworks: [
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/alberto-fernandez",
//       },
//       {
//         name: "X",
//         url: "https://x.com/alberto_tech",
//       },
//       {
//         name: "Website",
//         url: "https://startuptech.com",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3",
//     name: "Dr. Ana Gutierrez",
//     title: "Senior Research Scientist",
//     company: "Google Research",
//     talkTopic: "Quantum Computing: The Next Frontier",
//     bio: "Pioneering researcher in quantum computing with multiple publications in top-tier journals.",
//     socialNetworks: [
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/ana-gutierrez",
//       },
//       {
//         name: "X",
//         url: "https://x.com/ana_quantum",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3",
//     name: "Prof. Diego Martinez",
//     title: "Department Head",
//     company: "MIT Technology Institute",
//     talkTopic: "Sustainable Technology for Smart Cities",
//     bio: "Expert in sustainable technology and smart city solutions with 20+ years of academic experience.",
//     socialNetworks: [
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/diego-martinez",
//       },
//       {
//         name: "Email",
//         url: "mailto:diego@mit.edu",
//       },
//     ],
//   },
  // {
  //   imageUrl: "",
  //   name: "Comming soon",
  //   title: "Comming soon",
  //   company: "Comming soon",
  //   talkTopic: "Comming soon",
  //   bio: "Comming soon.",
  //   socialNetworks: [
  //     {
  //        name: "LinkedIn",
  //        url: "https://www.linkedin.com/in/sofia-morales",
  //      },
  //      {
  //        name: "X",
  //        url: "https://x.com/sofia_cloud",
  //      },
  //   ],
  // },
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
    id="speakers"
    class="container lg:w-[75%] py-10 sm:py-14"
  >
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Speakers</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Meet Our 
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Amazing Speakers
        </span>
      </h2>
      <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
        Learn from industry leaders, researchers, and innovators who are shaping the future of technology
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
          talkTopic,
          bio,
          socialNetworks,
        } in speakersList"
        :key="name"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hovercard hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 hover:border hover:border-primary/20"
      >
        <CardHeader class="text-center pb-4">
          <!-- Speaker Photo -->
          <div class="mx-auto mb-4 relative">
            <div class="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-[#D247BF] to-primary p-[3px] bg-gradient-to-r from-[#D247BF] to-primary">
              <img
                :src="imageUrl"
                :alt="name"
                class="w-full h-full object-cover rounded-full bg-background"
              />
            </div>
            <!-- Status indicator -->
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
          <!-- Talk Topic -->
          <div class="p-3 bg-primary/10 rounded-lg border border-primary/20">
            <h4 class="font-semibold text-sm text-primary mb-1">Talk Topic:</h4>
            <p class="text-sm">{{ talkTopic }}</p>
          </div>

          <!-- Bio -->
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
<!-- 
      <div class="text-center mt-12">
      <div class="p-6 bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-xl border border-primary/20">
        <h3 class="text-xl font-bold mb-2">Want to be a Speaker?</h3>
        <p class="text-muted-foreground mb-4">
          We're always looking for passionate sponsors to share their knowledge
        </p>
        <a 
          href="mailto:r9-syp@computer.org" 
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D247BF] to-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <Mail class="w-4 h-4 mr-2" />
          Contact Us
          r9-syp@computer.org
          
        </a>
      </div>
    </div> -->

    
  
  </section>
</template>