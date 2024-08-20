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
            <div
              v-if="!isLoaded"
              class="tw-font-sans tw-font-medium tw-text-gray-500"
              >Loading ...</div
            >
            <div v-else-if="!isSignedIn">
              <SignInButton
                class="tw-px-4 tw-py-2 tw-rounded-full tw-bg-primary-600 tw-text-white tw-text-sm tw-font-semibold"
              >
                登录
              </SignInButton>
            </div>
            <div v-else>
              <div class="tw-text-center">
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <v-img
                      :src="user?.imageUrl"
                      class="tw-size-8 tw-rounded-full tw-cursor-pointer"
                      v-bind="props"
                    ></v-img>
                  </template>
                  <v-list class="tw-text-center tw-mt-4">
                    <v-list-item href="#">
                      <v-list-item-title>我的作品</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <SignOutButton>登出</SignOutButton>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <!-- <SignedIn>
              <NuxtLink
                href="/dashboard"
                class="tw-px-4 tw-py-2 tw-rounded-full tw-bg-black tw-text-white tw-text-sm tw-font-semibold"
              >
                Dashboard
              </NuxtLink>
 
            </SignedIn> -->
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton
} from 'vue-clerk'
import { useAuth, useUser } from 'vue-clerk'

interface Nav {
  name: string
  title: string
  icon?: string
  url: string
  target: string
}

const navigations: Nav[] = [
  { name: 'home', title: '首页', url: '/', target: '_self' },
  { name: 'pricing', title: '价格', url: '/pricing', target: '_self' }
]
const { getToken, isLoaded, isSignedIn } = useAuth()
const { user } = useUser()
</script>

<style scoped></style>
