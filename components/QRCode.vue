<template>
  <section>
    <div class="mx-auto max-w-7xl px-5 my-16">
      <div class="mx-auto w-full max-w-3xl text-center">
        <h2 class="text-3xl font-normal md:text-2xl">全部二维码图片 </h2>
        <div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
          <p class="text-[#636262]"></p>
        </div>
      </div>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-flex v-for="(item, index) in qrcode" :key="index" xs4>
            <v-card flat tile>
              <v-img :src="item.url"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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

<style scoped></style>
