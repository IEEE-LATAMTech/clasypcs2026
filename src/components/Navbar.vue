<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronsDown, Menu, ChevronDown } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

type MainNavEntry =
  | { kind: "hash"; href: string; label: string }
  | { kind: "route"; to: string; label: string };

interface PreviousEdition {
  href: string;
  label: string;
  location: string;
}

const mainRoutes: MainNavEntry[] = [
  { kind: "hash", href: "#pricing", label: "Pricing" },
  { kind: "hash", href: "#services", label: "Location" },
  { kind: "hash", href: "#team", label: "Team" },
  { kind: "hash", href: "#faq", label: "FAQ" },
  { kind: "hash", href: "#registration", label: "Register" },
  { kind: "route", to: "/hackathon", label: "Hackathon" },
];

function hashHomeHref(hash: string) {
  return `/${hash}`;
}

const previousEditions: PreviousEdition[] = [
  {
    href: "https://clasypcs2025.ieee-latamtech.org/",
    label: "IEEE CLASYPCS 2025",
    location: "Montevideo, Uruguay",
  },
];

const isOpen = ref<boolean>(false);
const isMobilePrevOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
    }"
  >
    <router-link
      to="/"
      class="font-bold text-lg flex items-center"
    >
       <img
        src="../assets/favicon.png"
        alt="CLASYPCS 2026 Logo"
        class="rounded-lg w-9 h-9 mr-2 border object-cover"
      />
      CLASYPCS 2026
    </router-link>

    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <router-link
                  to="/"
                  class="flex items-center"
                >
                  <ChevronsDown
                    class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white"
                  />
                  CLASYPCS 2026
                </router-link>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <template v-for="item in mainRoutes" :key="item.label">
                <Button
                  v-if="item.kind === 'route'"
                  as-child
                  variant="ghost"
                  class="justify-start text-base"
                >
                  <router-link :to="item.to" @click="isOpen = false">
                    {{ item.label }}
                  </router-link>
                </Button>
                <Button
                  v-else
                  as-child
                  variant="ghost"
                  class="justify-start text-base"
                >
                  <a
                    @click="isOpen = false"
                    :href="hashHomeHref(item.href)"
                  >
                    {{ item.label }}
                  </a>
                </Button>
              </template>

              <!-- Previous Editions accordion for mobile -->
              <div>
                <Button
                  variant="ghost"
                  class="justify-start text-base w-full flex items-center gap-1"
                  @click="isMobilePrevOpen = !isMobilePrevOpen"
                >
                  Previous Editions
                  <ChevronDown class="size-4 transition-transform" :class="{ 'rotate-180': isMobilePrevOpen }" />
                </Button>
                <div v-if="isMobilePrevOpen" class="ml-4 flex flex-col gap-1">
                  <a
                    v-for="edition in previousEditions"
                    :key="edition.href"
                    :href="edition.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-muted-foreground hover:text-foreground px-4 py-1"
                    @click="isOpen = false"
                  >
                    {{ edition.label }} — {{ edition.location }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem
          v-for="item in mainRoutes"
          :key="item.label"
        >
          <NavigationMenuLink asChild>
            <Button
              as-child
              variant="ghost"
              class="justify-start text-base"
            >
              <router-link v-if="item.kind === 'route'" :to="item.to">
                {{ item.label }}
              </router-link>
              <a v-else :href="hashHomeHref(item.href)">{{ item.label }}</a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <!-- Previous Editions dropdown -->
        <NavigationMenuItem>
          <NavigationMenuTrigger class="text-base bg-transparent hover:bg-accent">
            Previous Editions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="w-56 p-2">
              <li
                v-for="edition in previousEditions"
                :key="edition.href"
              >
                <NavigationMenuLink asChild>
                  <a
                    :href="edition.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">{{ edition.label }}</div>
                    <p class="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">{{ edition.location }}</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>