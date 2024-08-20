<template>
  <header>
    <div class="tw-h-auto tw-w-screen">
      <nav
        class="tw-font-sans tw-mx-auto tw-h-auto tw-w-full tw-max-w-[1600px] lg:tw-relative lg:tw-top-0"
      >
        <div
          class="tw-flex tw-items-center tw-px-10 tw-py-8 lg:tw-justify-between lg:tw-px-14 lg:tw-py-8 xl:tw-px-20"
        >
          <a href="/" class="tw-text-xl tw-font-medium tw-flex tw-items-center">
            <img
              src="~/assets/logo.svg"
              alt="logo"
              class="tw-w-auto tw-h-8 tw-rounded-full tw-mr-2"
            />
            <span class="tw-font-bold tw-text-primary-600 tw-text-2xl"
              >AI QRCode</span
            >
          </a>
          <div class="tw-hidden md:tw-flex tw-ml-16">
            <a
              class="tw-text-base tw-font-normal tw-leading-6 tw-text-gray-800 tw-mx-4"
              v-for="nav in navigations"
              :href="nav.url"
              :target="nav.target"
              >{{ nav.title }}</a
            >
          </div>
          <div class="tw-flex-1" />
          <div class="tw-flex tw-items-center tw-space-x-3 lg:tw-space-y-0">
            <SignedIn>
              <NuxtLink
                href="/dashboard"
                class="tw-px-4 tw-py-2 tw-rounded-full tw-bg-black tw-text-white tw-text-sm tw-font-semibold"
              >
                Dashboard
              </NuxtLink>
              <SignOutButton
                class="tw-px-4 tw-py-2 tw-rounded-full tw-bg-black tw-text-white tw-text-sm tw-font-semibold"
              >
                Sign Out
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton
                class="tw-px-4 tw-py-2 tw-rounded-full tw-bg-black tw-text-white tw-text-sm tw-font-semibold"
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
