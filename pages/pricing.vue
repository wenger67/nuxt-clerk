<template>
  <div class="tw-relative tw-isolate tw-bg-white tw-px-6 tw-py-8 lg:tw-px-8">
    <div class="tw-mx-auto tw-max-w-3xl tw-text-center lg:tw-max-w-4xl">
      <h1
        class="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-primary-600 sm:tw-text-6xl"
      >
        付费方案
      </h1>
    </div>
    <h2
      class="tw-mx-auto tw-mt-6 tw-max-w-2xl tw-text-center tw-text-lg tw-leading-8 tw-text-gray-600"
    >
      选择一个付费方案， 支付完成后可生成AI美化二维码
    </h2>
    <div
      class="tw-mx-auto tw-mt-16 tw-grid tw-max-w-lg tw-grid-cols-1 tw-items-center tw-gap-y-6 sm:tw-mt-20 sm:tw-gap-y-0 lg:tw-max-w-4xl lg:tw-grid-cols-2"
    >
      <div
        v-for="(item, index) in tiers"
        :key="item.name"
        :class="[
          index === 0
            ? 'tw-rounded-t-3xl sm:tw-rounded-b-none lg:tw-rounded-tr-none lg:tw-rounded-bl-3xl'
            : 'sm:tw-rounded-t-none lg:tw-rounded-tr-3xl lg:tw-rounded-bl-none',
          item.featured
            ? 'tw-relative tw-bg-white tw-shadow-2xl'
            : 'tw-bg-white/60 sm:tw-mx-8 lg:tw-mx-0',
          'tw-rounded-3xl tw-p-8 tw-ring-1 tw-ring-gray-900/10 sm:tw-p-10'
        ]"
      >
        <p
          :id="item.id"
          class="tw-text-base tw-font-semibold tw-leading-7 tw-text-indigo-600"
        >
          {{ item.name }}
        </p>
        <p class="tw-mt-4 tw-flex tw-items-baseline tw-gap-x-2">
          <span
            class="tw-text-5xl tw-font-bold tw-tracking-tight tw-text-gray-900"
          >
            {{ item.priceMonthly }}
          </span>
          <span class="tw-text-base tw-text-gray-500">
            {{ item.unit }}
          </span>
        </p>
        <p class="tw-mt-6 tw-text-base tw-leading-7 tw-text-gray-600">
          {{ item.description }}
        </p>
        <ul
          role="list"
          class="tw-mt-8 tw-space-y-3 tw-text-sm tw-leading-6 tw-text-gray-600 sm:tw-mt-10"
        >
          <li
            v-for="feature in item.features"
            :key="feature"
            class="tw-flex tw-gap-x-3"
          >
            <v-icon
              icon="mdi-check"
              color="deep-purple-accent-3"
              class="tw-flex-none"
              aria-hidden="true"
            ></v-icon>
            {{ feature }}
          </li>
        </ul>
        <v-btn
          color="deep-purple-accent-2"
          v-model="loading"
          class="tw-mt-8 tw-w-full"
          :disabled="loading"
          @click="
            handleCheckout(item.plan, item.amount, item.currency, item.credits)
          "
        >
          {{ loading.valueOf() ? '处理中...' : '购买' }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import sleep from '../utils/utils'
import { useAuth } from 'vue-clerk'
const { isLoaded, isSignedIn, userId, sessionId } = useAuth()
const tiers = [
  {
    name: '试用版',
    id: 'try',
    href: '#',
    priceMonthly: '¥9.9',
    unit: '一次性付款',
    plan: 'one-time',
    amount: 9999,
    currency: 'cny',
    credits: 5,
    description: '',
    features: [
      '可生成 5 个AI美化二维码',
      '1 个月内有效',
      '高清的图片质量',
      '较快的生成速度',
      '可下载 5 个 AI 美化二维码'
    ],
    featured: true
  },
  {
    name: '畅享版',
    id: 'one-time-payment',
    href: '#',
    priceMonthly: '¥19.9',
    unit: '一次性付款',
    plan: 'one-time',
    amount: 9999,
    currency: 'cny',
    credits: 30,
    description: '',
    features: [
      '可生成 30 个AI美化二维码',
      '1 个月内有效',
      '高清的图片质量',
      '较快的生成速度',
      '不限制 AI 美化二维码下载次数'
    ],
    featured: false
  }
]

const loading = ref(false)

const handleCheckout = async (
  plan: string,
  amount: number,
  currency: string,
  credits: number
) => {
  console.log(
    'handleCheckout',
    isLoaded.value,
    isSignedIn.value,
    userId.value,
    sessionId.value
  )
  if (isLoaded.value && !isSignedIn.value) {
    return navigateTo('/sign-in')
  }
  loading.value = true
  //  TODO payment
  await sleep(2000)
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
