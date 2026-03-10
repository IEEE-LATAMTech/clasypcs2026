<script setup lang="ts">
import { ref, reactive } from "vue";
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { 
  AlertCircle, 
  Mail, 
  User, 
  GraduationCap, 
  Building, 
  Heart, 
  FileText 
} from "lucide-vue-next";

interface RegistrationFormProps {
  // Personal Information
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  countryOfOrigin: string;
  identificationNumber: string;
  identificationType: string;
  
  // Academic Information
  universityName: string;
  studentOrProfessional: string;
  graduationDate: string;
  shirtSize: string;
  
  // IEEE Information
  membershipNumber: string;
  ieeeSection: string;
  ieeeChapter: string;
  ieeePosition: string;
  registrationCategory: string;
  
  // Medical Information & Emergency Contact
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalCondition: string;
  allergies: string;
  dietaryRestrictions: string;
  
  // Motivation Letter
  motivationLetter: string;
  additionalDocuments: string;
}

const registrationForm = reactive<RegistrationFormProps>({
  // Personal Information
  fullName: "",
  email: "",
  phoneCountryCode: "+1",
  phoneNumber: "",
  countryOfOrigin: "",
  identificationNumber: "",
  identificationType: "National ID",
  
  // Academic Information
  universityName: "",
  studentOrProfessional: "Student",
  graduationDate: "",
  shirtSize: "M",
  
  // IEEE Information
  membershipNumber: "",
  ieeeSection: "",
  ieeeChapter: "",
  ieeePosition: "Member",
  registrationCategory: "Student Member",
  
  // Medical Information & Emergency Contact
  emergencyContactName: "",
  emergencyContactPhone: "",
  medicalCondition: "",
  allergies: "",
  dietaryRestrictions: "",
  
  // Motivation Letter
  motivationLetter: "",
  additionalDocuments: "",
});

const invalidInputForm = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);
const submitSuccess = ref<boolean>(false);

// EmailJS Configuration - Replace with your actual values
const EMAILJS_SERVICE_ID = 'service_e9x87vp';
const EMAILJS_TEMPLATE_ID = 'template_m25v52h';
const EMAILJS_PUBLIC_KEY = '7PgYcd9fDVBNItAkJ';

const handleSubmit = async () => {
  invalidInputForm.value = false;
  isSubmitting.value = true;

  try {
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'dan_mex22@ieee.org', // Replace with your email
      from_name: registrationForm.fullName,
      from_email: registrationForm.email,
      subject: `CLASYPCS 2026 Scholarship Application - ${registrationForm.fullName}`,
      
      // Personal Information
      full_name: registrationForm.fullName,
      email: registrationForm.email,
      phone: `${registrationForm.phoneCountryCode} ${registrationForm.phoneNumber}`,
      country: registrationForm.countryOfOrigin,
      identification_type: registrationForm.identificationType,
      identification_number: registrationForm.identificationNumber,
      
      // Academic Information
      university: registrationForm.universityName,
      academic_status: registrationForm.studentOrProfessional,
      graduation_date: registrationForm.graduationDate,
      shirt_size: registrationForm.shirtSize,
      
      // IEEE Information
      membership_number: registrationForm.membershipNumber || 'Not provided',
      ieee_section: registrationForm.ieeeSection || 'Not provided',
      ieee_chapter: registrationForm.ieeeChapter || 'Not provided',
      ieee_position: registrationForm.ieeePosition,
      registration_category: registrationForm.registrationCategory,
      
      // Medical & Emergency Contact
      emergency_contact_name: registrationForm.emergencyContactName,
      emergency_contact_phone: registrationForm.emergencyContactPhone,
      medical_condition: registrationForm.medicalCondition || 'None',
      allergies: registrationForm.allergies || 'None',
      dietary_restrictions: registrationForm.dietaryRestrictions || 'None',
      
      // Motivation Letter
      motivation_letter: registrationForm.motivationLetter,
      additional_documents: registrationForm.additionalDocuments || 'None',
      
      // Message with all information formatted
      message: `
=== CLASYPCS 2026 SCHOLARSHIP APPLICATION ===

PERSONAL INFORMATION:
• Full Name: ${registrationForm.fullName}
• Email: ${registrationForm.email}
• Phone: ${registrationForm.phoneCountryCode} ${registrationForm.phoneNumber}
• Country: ${registrationForm.countryOfOrigin}
• ${registrationForm.identificationType}: ${registrationForm.identificationNumber}

ACADEMIC INFORMATION:
• University: ${registrationForm.universityName}
• Status: ${registrationForm.studentOrProfessional}
• Graduation: ${registrationForm.graduationDate}
• Shirt Size: ${registrationForm.shirtSize}

IEEE INFORMATION:
• Membership Number: ${registrationForm.membershipNumber || 'Not provided'}
• Section: ${registrationForm.ieeeSection || 'Not provided'}
• Chapter: ${registrationForm.ieeeChapter || 'Not provided'}
• Position: ${registrationForm.ieeePosition}
• Category: ${registrationForm.registrationCategory}

MEDICAL & EMERGENCY:
• Emergency Contact: ${registrationForm.emergencyContactName}
• Emergency Phone: ${registrationForm.emergencyContactPhone}
• Medical Conditions: ${registrationForm.medicalCondition || 'None'}
• Allergies: ${registrationForm.allergies || 'None'}
• Dietary Restrictions: ${registrationForm.dietaryRestrictions || 'None'}

MOTIVATION LETTER:
• Letter: ${registrationForm.motivationLetter}
• Additional Documents: ${registrationForm.additionalDocuments || 'None'}

Registration submitted on: ${new Date().toLocaleString()}
      `
    };

    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    submitSuccess.value = true;
    console.log('Scholarship application submitted successfully!');
    
    // Optional: Reset form after successful submission
    // Object.assign(registrationForm, { /* reset values */ });
    
  } catch (error) {
    console.error('Error submitting scholarship application:', error);
    invalidInputForm.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

const countryCodes = [
  { code: "+1", country: "United States / Canada" },
  { code: "+54", country: "Argentina" },
  { code: "+591", country: "Bolivia" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+506", country: "Costa Rica" },
  { code: "+53", country: "Cuba" },
  { code: "+593", country: "Ecuador" },
  { code: "+503", country: "El Salvador" },
  { code: "+502", country: "Guatemala" },
  { code: "+504", country: "Honduras" },
  { code: "+52", country: "Mexico" },
  { code: "+505", country: "Nicaragua" },
  { code: "+507", country: "Panama" },
  { code: "+595", country: "Paraguay" },
  { code: "+51", country: "Peru" },
  { code: "+1", country: "Puerto Rico" },
  { code: "+1", country: "Dominican Republic" },
  { code: "+598", country: "Uruguay" },
  { code: "+58", country: "Venezuela" },
  { code: "+34", country: "Spain" },
];
</script>

<template>
  <section
    id="registration"
    class="container py-10 sm:py-14"
  >
    <div class="mb-8 text-center">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Join Us</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Register for CLASYPCS 2026</h2>
      <p class="mt-3 text-muted-foreground">Complete all sections to apply for a scholarship and secure your spot at the conference.</p>
      <p class="mt-2 text-sm font-semibold text-primary">🗓 Registration & Scholarships open April 20th, 2026.</p>
    </div>

    <Card class="bg-muted/60 dark:bg-card max-w-4xl mx-auto">
      <CardContent class="p-8">
        <form @submit.prevent="handleSubmit" class="space-y-12">
          
          <!-- Personal Information -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <User class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Personal Information</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Juan Perez Garcia"
                  v-model="registrationForm.fullName"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan.garciah@ieee.org"
                  v-model="registrationForm.email"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="countryOfOrigin">Country of Origin *</Label>
                <Input
                  id="countryOfOrigin"
                  type="text"
                  placeholder="Mexico"
                  v-model="registrationForm.countryOfOrigin"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="phoneCountryCode">Country Code *</Label>
                <Select v-model="registrationForm.phoneCountryCode">
                  <SelectTrigger>
                    <SelectValue placeholder="Select country code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="country in countryCodes" :key="country.code + country.country" :value="country.code">
                        {{ country.code }} ({{ country.country }})
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="1258946751"
                  v-model="registrationForm.phoneNumber"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="identificationType">Identification Type *</Label>
                <Select v-model="registrationForm.identificationType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="National ID">National ID / Cedula</SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="identificationNumber">{{ registrationForm.identificationType }} Number *</Label>
                <Input
                  id="identificationNumber"
                  type="text"
                  placeholder="12345678"
                  v-model="registrationForm.identificationNumber"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Academic Information -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <GraduationCap class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Academic Information</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="universityName">University Name/Company/ Institute*</Label>
                <Input
                  id="universityName"
                  type="text"
                  placeholder="Instituto Tecnologico de Morelia/Cisco/Institute of Massachusetts"
                  v-model="registrationForm.universityName"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="studentOrProfessional">Academic Status *</Label>
                <Select v-model="registrationForm.studentOrProfessional">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Recent Graduate">Recent Graduate</SelectItem>
                      <SelectItem value="Professional">Professional</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="graduationDate">
                  {{ registrationForm.studentOrProfessional === 'Student' ? 'Expected Graduation Date' : 'Graduation Date' }} *
                </Label>
                <Input
                  id="graduationDate"
                  type="month"
                  v-model="registrationForm.graduationDate"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="shirtSize">Shirt Size *</Label>
                <Select v-model="registrationForm.shirtSize">
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <!-- IEEE Information -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <Building class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">IEEE Information</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5">
                <Label for="membershipNumber">IEEE Membership Number</Label>
                <Input
                  id="membershipNumber"
                  type="text"
                  placeholder="12345678"
                  v-model="registrationForm.membershipNumber"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="ieeeSection">IEEE Section</Label>
                <Input
                  id="ieeeSection"
                  type="text"
                  placeholder="Centro Occidente Section"
                  v-model="registrationForm.ieeeSection"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="ieeeChapter">IEEE Chapter</Label>
                <Input
                  id="ieeeChapter"
                  type="text"
                  placeholder="Computer Society, Student Branch, etc."
                  v-model="registrationForm.ieeeChapter"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="registrationCategory">Registration Category *</Label>
                <Select v-model="registrationForm.registrationCategory">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Chair">Chair</SelectItem>
                      <SelectItem value="Vice-Chair">Vice-Chair</SelectItem>
                      <SelectItem value="Secretary">Secretary</SelectItem>
                      <SelectItem value="Treasure">Treasure</SelectItem>
                      <SelectItem value="Web Master">Web Master</SelectItem>
                      <SelectItem value="Student Member">Student Member</SelectItem>
                      <SelectItem value="Member">Member</SelectItem>
                      <SelectItem value="Student and Young Professional">Student and Young Professional</SelectItem>
                      <SelectItem value="Professional Member">Professional Member</SelectItem>
                      <SelectItem value="Non-IEEE Member">Non-IEEE Member</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <!-- Medical Information & Emergency Contact -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <Heart class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Medical Information & Emergency Contact</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5">
                <Label for="emergencyContactName">Emergency Contact Name *</Label>
                <Input
                  id="emergencyContactName"
                  type="text"
                  placeholder="Abril Gomez"
                  v-model="registrationForm.emergencyContactName"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="emergencyContactPhone">Emergency Contact Phone *</Label>
                <Input
                  id="emergencyContactPhone"
                  type="tel"
                  placeholder="+52 555 123 4567"
                  v-model="registrationForm.emergencyContactPhone"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="medicalCondition">Important Medical Condition</Label>
                <Textarea
                  id="medicalCondition"
                  placeholder="Describe any relevant medical conditions... "
                  rows="3"
                  v-model="registrationForm.medicalCondition"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="allergies">Allergies</Label>
                <Textarea
                  id="allergies"
                  placeholder="List any food or medication allergies..."
                  rows="3"
                  v-model="registrationForm.allergies"
                />
              </div>

              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="dietaryRestrictions">Dietary Restrictions</Label>
                <Textarea
                  id="dietaryRestrictions"
                  placeholder="Vegetarian, vegan, gluten-free, etc..."
                  rows="2"
                  v-model="registrationForm.dietaryRestrictions"
                />
              </div>
            </div>
          </div>

          <!-- Motivation Letter -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <FileText class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Motivation Letter</h3>
            </div>
            
            <div class="space-y-6">
              <div class="flex flex-col gap-1.5">
                <Label for="motivationLetter">Why do you want to attend CLASYPCS 2026? *</Label>
                <Textarea
                  id="motivationLetter"
                  placeholder="Please tell us about your motivations, goals, position on IEEE and how attending this conference will benefit your academic/professional development. What do you hope to learn and contribute? (Minimum 200 words)"
                  rows="8"
                  v-model="registrationForm.motivationLetter"
                  required
                  class="min-h-[200px]"
                />
                <p class="text-sm text-muted-foreground">
                  This is your opportunity to tell us about yourself, your goals, and why you deserve this scholarship.
                </p>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="additionalDocuments">Additional Documents (Optional)</Label>
                <Textarea
                  id="additionalDocuments"
                  placeholder="Please list any additional documents you would like us to consider (CV, recommendation letters, portfolio, etc.). You can send these documents separately to r9-syp@computer.org with your name in the subject line."
                  rows="4"
                  v-model="registrationForm.additionalDocuments"
                />
                <div class="p-4 bg-muted/50 rounded-lg">
                  <p class="text-sm text-muted-foreground">
                    <strong>📄 Document Submission:</strong> 
                    After submitting this form, you can send your supporting documents (PDF format) to 
                    <a href="mailto:r9-syp@computer.org" class="text-primary underline">r9-syp@computer.org</a>
                    with the subject line: "CLASYPCS 2026 Documents - [Your Full Name]"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Success Alert -->
          <Alert v-if="submitSuccess" class="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your scholarship application has been submitted successfully. You will receive a confirmation email shortly. Don't forget to send your supporting documents to r9-syp@computer.org if you mentioned any.
            </AlertDescription>
          </Alert>

          <!-- Error Alert -->
          <Alert v-if="invalidInputForm" variant="destructive">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error submitting your scholarship application. Please check your information and try again.
            </AlertDescription>
          </Alert>

          <!-- Submit Button -->
          <div class="flex justify-center pt-6">
            <Button 
              type="submit" 
              class="w-full md:w-auto px-12 py-3 text-lg font-semibold"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>

    <!-- Contact Info -->
    <div class="mt-12 text-center">
      <div class="flex justify-center items-center gap-2 mb-2">
        <Mail class="w-4 h-4 text-primary" />
        <span class="font-semibold">Have questions?</span>
      </div>
      <p class="text-muted-foreground">
        Contact us at: <a href="mailto:clasypcs2025@gmail.com" class="text-primary underline">r9-syp@computer.org</a>
      </p>
    </div>
  </section>
</template>