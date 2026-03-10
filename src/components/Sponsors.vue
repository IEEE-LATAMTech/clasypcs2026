<script setup lang="ts">
import { ref, reactive } from "vue";
import emailjs from '@emailjs/browser';
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Binary,
  Mail,
  AlertCircle,
  Building2,
  DollarSign,
  X,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

interface SponsorFormProps {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  sponsorshipLevel: string;
  interests: string;
  message: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "binary",
    name: "Computer Society",
  }
];

const iconMap: Record<string, typeof Binary> = {
  binary: Binary,
};

// Modal state
const isModalOpen = ref(false);
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

// Form data
const sponsorForm = reactive<SponsorFormProps>({
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  sponsorshipLevel: "Gold",
  interests: "",
  message: "",
});

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_e9x87vp'; 
const EMAILJS_TEMPLATE_ID = 'template_cpdchxr'; 
const EMAILJS_PUBLIC_KEY = '7PgYcd9fDVBNItAkJ';

const handleSponsorSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = false;
  submitSuccess.value = false;

  try {
    const templateParams = {
      to_email: 'dan_mex22@ieee.org',
      from_name: sponsorForm.contactName,
      from_email: sponsorForm.email,
      subject: `New Sponsorship Inquiry CLASYPCS 2026 - ${sponsorForm.companyName}`,
      
      // Sponsor Information
      company_name: sponsorForm.companyName,
      contact_name: sponsorForm.contactName,
      email: sponsorForm.email,
      phone: sponsorForm.phone,
      website: sponsorForm.website,
      sponsorship_level: sponsorForm.sponsorshipLevel,
      interests: sponsorForm.interests,
      
      // Message with all information formatted
      message: `
=== CLASYPCS 2026 SPONSORSHIP INQUIRY ===

COMPANY INFORMATION:
• Company Name: ${sponsorForm.companyName}
• Contact Person: ${sponsorForm.contactName}
• Email: ${sponsorForm.email}
• Phone: ${sponsorForm.phone}
• Website: ${sponsorForm.website}

SPONSORSHIP DETAILS:
• Preferred Level: ${sponsorForm.sponsorshipLevel}
• Areas of Interest: ${sponsorForm.interests}

MESSAGE:
${sponsorForm.message}

Inquiry submitted on: ${new Date().toLocaleString()}
      `
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    submitSuccess.value = true;
    
    // Reset form after successful submission
    setTimeout(() => {
      Object.assign(sponsorForm, {
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        website: "",
        sponsorshipLevel: "Gold",
        interests: "",
        message: "",
      });
      isModalOpen.value = false;
      submitSuccess.value = false;
    }, 2000);
    
  } catch (error) {
    console.error('Error submitting sponsorship inquiry:', error);
    submitError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// const resetForm = () => {
//   submitError.value = false;
//   submitSuccess.value = false;
// };
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Our Sponsors</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component
              :is="iconMap[icon]"
              class="mr-2"
              stroke-width="3"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>

    <div class="text-center mt-12">
      <div class="p-6 bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-xl border border-primary/20">
        <h3 class="text-xl font-bold mb-2">Want to be a Sponsor?</h3>
        <p class="text-muted-foreground mb-4">
          Join us as a sponsor and showcase your brand to the next generation of tech leaders
        </p>
        <!-- Modal personalizado sin dependencias -->
        <Button 
          @click="isModalOpen = true"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D247BF] to-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <Mail class="w-4 h-4 mr-2" />
          Contact Us
        </Button>
      </div>
    </div>

    <!-- Modal overlay -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="isModalOpen = false"
    >
      <div class="bg-background border rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <div>
            <h2 class="text-xl font-semibold flex items-center gap-2">
              <Building2 class="w-5 h-5 text-primary" />
              Become a Sponsor - CLASYPCS 2026
            </h2>
            <p class="text-sm text-muted-foreground mt-2">
              Fill out this form and we'll get back to you with sponsorship packages and opportunities.
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            @click="isModalOpen = false"
            class="h-auto p-2"
          >
            <X class="w-4 h-4" />
          </Button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <form @submit.prevent="handleSponsorSubmit" class="space-y-6">
            <!-- Company Information -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-primary flex items-center gap-2">
                <Building2 class="w-4 h-4" />
                Company Information
              </h4>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <Label for="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Tech Innovation Corp"
                    v-model="sponsorForm.companyName"
                    required
                  />
                </div>

                <div class="flex flex-col gap-1.5">
                  <Label for="contactName">Contact Person *</Label>
                  <Input
                    id="contactName"
                    type="text"
                    placeholder="Carlos Villagran"
                    v-model="sponsorForm.contactName"
                    required
                  />
                </div>

                <div class="flex flex-col gap-1.5">
                  <Label for="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="carlos@company.com"
                    v-model="sponsorForm.email"
                    required
                  />
                </div>

                <div class="flex flex-col gap-1.5">
                  <Label for="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+52 555 123 4567"
                    v-model="sponsorForm.phone"
                  />
                </div>

                <div class="flex flex-col gap-1.5 md:col-span-2">
                  <Label for="website">Company Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://company.com"
                    v-model="sponsorForm.website"
                  />
                </div>
              </div>
            </div>

            <!-- Sponsorship Details -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-primary flex items-center gap-2">
                <DollarSign class="w-4 h-4" />
                Sponsorship Interest
              </h4>

              <div class="grid grid-cols-1 gap-4">
                <div class="flex flex-col gap-1.5">
                  <Label for="sponsorshipLevel">Preferred Sponsorship Level *</Label>
                  <Select v-model="sponsorForm.sponsorshipLevel">
                    <SelectTrigger>
                      <SelectValue placeholder="Select sponsorship level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Platinum">Platinum ($10,000+)</SelectItem>
                        <SelectItem value="Gold">Gold ($5,000 - $9,999)</SelectItem>
                        <SelectItem value="Silver">Silver ($2,500 - $4,999)</SelectItem>
                        <SelectItem value="Bronze">Bronze ($1,000 - $2,499)</SelectItem>
                        <SelectItem value="In-Kind">In-Kind Sponsorship</SelectItem>
                        <SelectItem value="Custom">Custom Package</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div class="flex flex-col gap-1.5">
                  <Label for="interests">Areas of Interest</Label>
                  <Input
                    id="interests"
                    type="text"
                    placeholder="e.g., Student workshops, Networking events, Exhibition booth"
                    v-model="sponsorForm.interests"
                  />
                </div>

                <div class="flex flex-col gap-1.5">
                  <Label for="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your company and what you hope to achieve through sponsorship..."
                    rows="4"
                    v-model="sponsorForm.message"
                  />
                </div>
              </div>
            </div>

            <!-- Success Alert -->
            <Alert v-if="submitSuccess" class="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your sponsorship inquiry has been submitted successfully. We'll contact you soon with more information!
              </AlertDescription>
            </Alert>

            <!-- Error Alert -->
            <Alert v-if="submitError" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                There was an error submitting your inquiry. Please try again or contact us directly.
              </AlertDescription>
            </Alert>

            <!-- Submit Button -->
            <div class="flex justify-end gap-3 pt-4 border-t">
              <Button 
                type="button"
                variant="outline"
                @click="isModalOpen = false"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                class="px-8 py-2 bg-gradient-to-r from-[#D247BF] to-primary text-white font-semibold"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Submitting...' : 'Send Inquiry' }}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>