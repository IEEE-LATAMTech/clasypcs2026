<script setup lang="ts">
import { Button } from "./ui/button";
import { ExternalLink, GraduationCap, Users } from "lucide-vue-next";

const groupMailto = (() => {
  const subject = encodeURIComponent("Group Registration Request - CLASYPCS 2026");
  const body = encodeURIComponent(
`Hello CLASYPCS 2026 Team,

We are interested in registering as a group (5+ members) for CLASYPCS 2026. Please find our member information below and send us a personalized group registration fee.

Member 1:
  - Full Name:
  - Email:
  - IEEE Membership Number:

Member 2:
  - Full Name:
  - Email:
  - IEEE Membership Number:

Member 3:
  - Full Name:
  - Email:
  - IEEE Membership Number:

Member 4:
  - Full Name:
  - Email:
  - IEEE Membership Number:

Member 5:
  - Full Name:
  - Email:
  - IEEE Membership Number:

Best regards,`
  );
  return `mailto:ieee.clasypcs@gmail.com?subject=${subject}&body=${body}`;
})();
</script>

<template>
  <section
    id="registration"
    class="container py-10 sm:py-14"
  >
    <div class="mb-10 text-center">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Join Us</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Register for CLASYPCS 2026</h2>
      <p class="mt-3 text-muted-foreground max-w-2xl mx-auto">
        Secure your spot at the biggest SYP event in Region 9. Choose your registration path or apply for a scholarship.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <!-- Individual Registration -->
      <div class="bg-muted/60 dark:bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center space-y-4">
        <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <ExternalLink class="w-7 h-7 text-primary" />
        </div>
        <h3 class="text-xl font-bold">Conference Registration</h3>
        <p class="text-muted-foreground text-sm flex-1">
          Register individually through the IEEE vTools platform. Select your category and secure your spot at CLASYPCS 2026.
        </p>
        <Button
          as-child
          class="w-full bg-gradient-to-r from-[#D247BF] to-primary hover:opacity-90 text-white font-semibold"
        >
          <a
            href="https://events.vtools.ieee.org/m/556799"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2"
          >
            Register Now
            <ExternalLink class="w-4 h-4" />
          </a>
        </Button>
      </div>

      <!-- Group Registration -->
      <div class="bg-muted/60 dark:bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center space-y-4">
        <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <Users class="w-7 h-7 text-primary" />
        </div>
        <h3 class="text-xl font-bold">Group Registration</h3>
        <p class="text-muted-foreground text-sm flex-1">
          Coming as a group of 5 or more? Contact us with your members' information and we'll send you a personalized group registration fee.
        </p>
        <Button
          as-child
          class="w-full bg-gradient-to-r from-[#D247BF] to-primary hover:opacity-90 text-white font-semibold"
        >
          <a
            :href="groupMailto"
            class="flex items-center justify-center gap-2"
          >
            Register as Group
            <Users class="w-4 h-4" />
          </a>
        </Button>
      </div>

      <!-- Scholarship Application -->
      <div class="bg-muted/60 dark:bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center space-y-4">
        <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <GraduationCap class="w-7 h-7 text-primary" />
        </div>
        <h3 class="text-xl font-bold">Scholarship Application</h3>
        <p class="text-muted-foreground text-sm flex-1">
          Outstanding Computer Society members can apply for a scholarship recognizing commitment and contributions to the CS community.
        </p>
        <Button
          as-child
          class="w-full bg-gradient-to-r from-[#D247BF] to-primary hover:opacity-90 text-white font-semibold"
        >
          <a
            href="https://forms.gle/Ug7saaZE3UpsQTqY9"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2"
          >
            Apply for Scholarship
            <ExternalLink class="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-muted-foreground">
      Questions? <a
        href="mailto:ieee.clasypcs@gmail.com?subject=CLASYPCS%202026%20Inquiry&body=Hello%20CLASYPCS%202026%20Team%2C%0A%0A"
        class="text-primary underline"
      >Contact us at ieee.clasypcs@gmail.com</a>
    </div>
  </section>
</template>
