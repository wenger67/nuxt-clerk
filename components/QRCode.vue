<template>
  <section>
    <div class="tw-mx-auto tw-max-w-7xl tw-px-5 tw-my-16">
      <nav
        class="tw-flex tw-justify-center tw-items-center tw-space-x-8 tw-mb-10"
      >
        <a
          href="#"
          class="ttw-text-sm tw-font-normal md:tw-text-base tw-border-b-2 tw-py-4 tw-w-fit hover:tw-text-primary-600 hover:tw-border-primary-600"
          >全部
        </a>
        <a
          href="#"
          class="tw-text-sm tw-font-normal md:tw-text-base tw-border-b-2 tw-py-4 tw-w-fit hover:tw-text-primary-600 hover:tw-border-primary-600"
          >最热
        </a>
        <a
          href="#"
          class="tw-text-sm tw-font-normal md:tw-text-base tw-border-b-2 tw-py-4 tw-w-fit hover:tw-text-primary-600 hover:tw-border-primary-600"
          >最新
        </a>
      </nav>
      <v-row class="tw-gap-y-4 md:tw-gap-y-8 lg:tw-gap-y-12">
        <v-col
          v-for="(item, index) in qrcode"
          :key="index"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          class="tw-gap-4 md:tw-gap-8 lg:tw-gap-12"
        >
          <div
            class="tw-relative tw-overflow-hidden tw-max-w-[280px] tw-mx-auto tw-cursor-pointer tw-shadow-sm tw-shadow-primary-600 tw-rounded-lg"
          >
            <v-img
              :src="item.url"
              width="280"
              aspect-ratio="1"
              class="tw-w-full tw-rounded-lg"
              cover
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
const qrcode = [
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' },
  { url: '/images/cover.webp' }
]
</script>

<style lang="scss" scoped></style>
