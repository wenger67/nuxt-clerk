<script setup lang="ts">
import { OrganizationSwitcher, UserButton } from 'vue-clerk'

import { DASHBOARD_CARDS } from '~/consts/cards'
</script>

<template>
  <main class="tw-max-w-[75rem] tw-w-full tw-mx-auto">
    <div class="tw-grid tw-grid-cols-[1fr_20.5rem] tw-gap-10 tw-pb-10">
      <div>
        <header
          class="tw-flex tw-items-center tw-justify-between tw-w-full tw-h-16 tw-gap-4"
        >
          <div class="tw-flex tw-gap-4">
            <ClerkLogo />
            <div aria-hidden class="w-px h-6 bg-[#C7C7C8]" />
            <NuxtLogo />
          </div>
          <div class="tw-flex tw-items-center tw-gap-2">
            <OrganizationSwitcher
              :appearance="{
                elements: {
                  organizationPreviewAvatarBox: 'size-6'
                }
              }"
            />
            <UserButton
              :appearance="{
                elements: {
                  userButtonAvatarBox: 'size-6'
                }
              }"
              default-open
            />
          </div>
        </header>
        <UserDetails />
      </div>
      <div class="tw-pt-[3.5rem]">
        <CodeSwitcher />
      </div>
    </div>
  </main>
  <LearnMore :cards="DASHBOARD_CARDS" />
</template>
