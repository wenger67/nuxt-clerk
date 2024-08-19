<template>
  <header>
    <div class="h-auto w-screen">
      <nav
        class="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0"
      >
        <div
          class="flex items-center px-10 py-8 lg:flex-row lg:justify-between lg:px-14 lg:py-8 xl:px-20"
        >
          <a href="/" class="text-xl font-medium flex items-center">
            <img
              src="~/assets/logo.svg"
              alt="logo"
              class="w-auto h-8 rounded-full mr-2"
            />
            <span class="font-bold text-primary-600 text-2xl">AI QRCode</span>
          </a>
          <div class="hidden md:flex ml-16">
            <a
              class="text-base font-normal leading-6 text-gray-800 mx-4"
              v-for="nav in navigations"
              :href="nav.url"
              :target="nav.target"
              >{{ nav.title }}</a
            >
          </div>
          <div class="flex-1" />
          <div class="flex items-center space-x-3 lg:space-y-0">
            <SignedIn>
              <NuxtLink
                href="/dashboard"
                class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
              >
                Dashboard
              </NuxtLink>
              <SignOutButton
                class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
              >
                Sign Out
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton
                class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
              >
                Sign In
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { SignInButton, SignedIn, SignedOut, SignOutButton } from 'vue-clerk'
import { type Nav } from '../utils/nav'
const navigations: Nav[] = [
  { name: 'home', title: '首页', url: '/', target: '_self' },
  { name: 'pricing', title: '价格', url: '/pricing', target: '_self' }
]
</script>

<style scoped></style>
