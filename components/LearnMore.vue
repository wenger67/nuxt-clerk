<script setup lang="ts">
interface Card {
  title: string
  description: string
  href: string
  linkText: string
}

defineProps<{
  cards: Card[]
}>()
</script>

<template>
  <div id="features" class="tw-relative tw-bg-white">
    <div
      class="tw-grid tw-grid-cols-4 tw-gap-8 tw-max-w-[75rem] tw-mx-auto tw-w-full tw-pt-16 tw-pb-24"
    >
      <div>
        <span class="tw-text-[0.8125rem]/5 tw-text-[#6C47FF] tw-font-medium">
          What's next
        </span>
        <h2
          class="tw-text-xl/[1.625rem] tw-font-semibold tw-text-[#131316] tw-tracking-tight tw-mt-2 tw-mb-3"
        >
          Learn more from our&nbsp;resources
        </h2>
        <p class="tw-text-[0.8125rem]/5 tw-text-[#5E5F6E]">
          Prebuilt components to handle essential functionality like user
          sign-in, sign-up, and account management.
        </p>
      </div>
      <NuxtLink
        v-for="(card, index) in cards"
        :key="index"
        :href="card.href"
        target="_blank"
        class="tw-border tw-border-[#F2F2F4] tw-rounded-lg tw-overflow-hidden tw-flex tw-flex-col"
      >
        <div class="tw-px-4 tw-py-3 tw-bg-[#FAFAFB] tw-space-y-1 tw-flex-1">
          <h3
            class="tw-text-sm tw-font-medium tw-text-[#131316] tw-tracking-tight"
          >
            {{ card.title }}
          </h3>
          <p class="tw-text-[0.8125rem]/5 tw-text-[#5E5F6E]">
            {{ card.description }}
          </p>
        </div>
        <div
          class="tw-bg-[#F5F5F7] tw-text-[#131316] tw-px-4 tw-py-2 tw-text-[0.8125rem]/5 tw-font-medium tw-flex tw-items-center tw-gap-1.5 tw-border-t tw-border-[#EDEDF0]"
        >
          {{ card.linkText }}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="12" height="12" rx="3" fill="#EEEEF0" />
            <path
              d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25"
              stroke="#9394A1"
              stroke-width="1.5"
              stroke-line-cap="round"
              stroke-line-join="round"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
