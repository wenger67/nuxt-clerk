<template>
  <section>
    <div class="mx-auto max-w-7xl px-5 my-16">
      <nav class="flex justify-center items-center space-x-8 mb-10">
        <a
          href="#"
          class="text-base font-normal md:text-xl border-b-2 py-4 w-fit active:text-primary-600 hover:text-primary-600 hover:border-primary-600"
          >全部
        </a>
        <a
          href="#"
          class="text-base font-normal md:text-xl border-b-2 py-4 w-fit active:text-primary-600 hover:text-primary-600 hover:border-primary-600"
          >最热
        </a>
        <a
          href="#"
          class="text-base font-normal md:text-xl border-b-2 py-4 w-fit active:text-primary-600 hover:text-primary-600 hover:border-primary-600"
          >最新
        </a>
      </nav>
      <v-row class="gap-y-6 md:gap-y-8 lg:gap-y-12">
        <v-col
          v-for="(item, index) in qrcode"
          :key="index"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          class="gap-6 md:gap-8 lg:gap-12"
        >
          <div
            class="relative overflow-hidden max-w-[280px] mx-auto cursor-pointer shadow-md rounded-lg"
          >
            <v-img
              :src="item.url"
              width="280"
              aspect-ratio="1"
              class="w-full rounded-lg"
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
