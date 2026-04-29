<script setup lang="ts">
interface PricingRow {
  category: string;
  csMember: string;
  ieeeMember: string;
  nonMember: string;
  group?: boolean;
  phase: "early" | "regular" | "late";
}

const rows: PricingRow[] = [
  { category: "Student – Early Bird", csMember: "$90", ieeeMember: "$140", nonMember: "$240", phase: "early" },
  { category: "Professional – Early Bird", csMember: "$150", ieeeMember: "$200", nonMember: "$300", phase: "early" },
  { category: "Group (5+) – Student (Early Bird)", csMember: "$80", ieeeMember: "$120", nonMember: "$210", group: true, phase: "early" },
  { category: "Group (5+) – Professional (Early Bird)", csMember: "$140", ieeeMember: "$180", nonMember: "$270", group: true, phase: "early" },
  { category: "Student – Regular", csMember: "$100", ieeeMember: "$150", nonMember: "$250", phase: "regular" },
  { category: "Professional – Regular", csMember: "$180", ieeeMember: "$230", nonMember: "$330", phase: "regular" },
  { category: "Group (5+) – Student (Regular)", csMember: "$90", ieeeMember: "$130", nonMember: "$220", group: true, phase: "regular" },
  { category: "Group (5+) – Professional (Regular)", csMember: "$170", ieeeMember: "$210", nonMember: "$300", group: true, phase: "regular" },
  { category: "Student – Late", csMember: "$120", ieeeMember: "$170", nonMember: "$270", phase: "late" },
  { category: "Professional – Late", csMember: "$210", ieeeMember: "$260", nonMember: "$360", phase: "late" },
  { category: "Group (5+) – Student (Late)", csMember: "$100", ieeeMember: "$140", nonMember: "$230", group: true, phase: "late" },
  { category: "Group (5+) – Professional (Late)", csMember: "$190", ieeeMember: "$230", nonMember: "$320", group: true, phase: "late" },
];

const deadlines = [
  { label: "Early Bird", period: "Until May 31st", color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" },
  { label: "Regular", period: "June 1 – July 31", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
  { label: "Late", period: "August 1 – August 20", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20" },
];

const phaseLabel: Record<string, string> = {
  early: "Early Bird",
  regular: "Regular",
  late: "Late",
};

const phaseClass: Record<string, string> = {
  early: "bg-green-500/5 dark:bg-green-500/5",
  regular: "bg-blue-500/5 dark:bg-blue-500/5",
  late: "bg-orange-500/5 dark:bg-orange-500/5",
};
</script>

<template>
  <section id="pricing" class="container py-10 sm:py-14">
    <!-- Header -->
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Pricing</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-3">
        Conference
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Registration
        </span>
      </h2>
      <p class="md:w-2/3 mx-auto text-base text-center text-muted-foreground">
        Choose your registration category based on your IEEE membership status and registration phase. All prices in USD per person.
      </p>
    </div>

    <!-- Registration Deadlines -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <div
        v-for="d in deadlines"
        :key="d.label"
        :class="`flex items-center gap-2 px-4 py-2 rounded-full border ${d.color} text-sm font-medium`"
      >
        <span class="font-bold">{{ d.label }}:</span>
        <span>{{ d.period }}</span>
      </div>
    </div>

    <!-- Scholarship Banner -->
    <div class="mb-8">
      <div class="max-w-4xl mx-auto bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-xl border border-primary/20 p-5 text-center">
        <h3 class="text-xl font-bold mb-2 flex items-center justify-center gap-2">
          🎓
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Scholarships Available!
          </span>
        </h3>
        <p class="text-muted-foreground">
          Are you an outstanding Computer Society member? Apply for a scholarship and join CLASYPCS 2026 as a recognition of your commitment and contributions to the CS community.
        </p>
      </div>
    </div>

    <!-- Pricing Table -->
    <div class="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-border shadow-sm">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-muted/80 dark:bg-muted/40">
            <th class="text-left px-4 py-3 font-semibold">Category</th>
            <th class="text-center px-4 py-3 font-semibold text-primary">CS Member</th>
            <th class="text-center px-4 py-3 font-semibold">IEEE Member (non-CS)</th>
            <th class="text-center px-4 py-3 font-semibold text-muted-foreground">Non-Member</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(row, index) in rows" :key="row.category">
            <!-- Phase header row -->
            <tr
              v-if="index === 0 || rows[index - 1].phase !== row.phase"
              class="border-t border-border"
            >
              <td colspan="4" :class="`px-4 py-2 text-xs font-bold uppercase tracking-wider text-center border-b border-border ${phaseClass[row.phase]}`">
                {{ phaseLabel[row.phase] }} Pricing
              </td>
            </tr>
            <!-- Data row -->
            <tr
              :class="[
                'border-t border-border/50 transition-colors hover:bg-muted/40',
                row.group ? 'italic text-muted-foreground' : '',
              ]"
            >
              <td class="px-4 py-3">{{ row.category }}</td>
              <td class="text-center px-4 py-3 font-semibold text-primary">{{ row.csMember }}</td>
              <td class="text-center px-4 py-3 font-medium">{{ row.ieeeMember }}</td>
              <td class="text-center px-4 py-3 text-muted-foreground">{{ row.nonMember }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- CTA -->
    <div class="text-center mt-8 space-y-3">
      <p class="text-sm text-muted-foreground">
        <strong>Membership Verification:</strong> Valid IEEE/CS membership required for discounted rates.
        <strong>Student Status:</strong> Valid student ID required.
      </p>
      <a
        href="#registration"
        class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#D247BF] to-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Register Now
      </a>
    </div>
  </section>
</template>
