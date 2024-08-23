<template>
  <div
    class="tw-relative tw-max-w-2xl tw-mx-auto tw-mt-8 md:tw-mt-12 tw-px-4 md:tw-px-8"
  >
    <v-text-field
      clearable
      placeholder="https://example.com"
      variant="outlined"
      v-model="url"
      label="Url"
      :oninput="handleInputChange"
      :rules="[
        () => !!url || 'This field is required',
        () => isValidComplexUrl(url) || '不是有效的url',
        () =>
          (!!url && url.length <= 100) ||
          'Address must be less than 100 characters'
      ]"
    ></v-text-field>
    <v-text-field
      class="tw-mt-2"
      clearable
      placeholder="please input prompt"
      variant="outlined"
      v-model="prompt"
      label="Prompt"
      :oninput="handleInputChange"
      :onkeyup="handleInputKeyup"
      :rules="[
        () => !!prompt || 'This field is required',
        () =>
          (!!prompt && prompt.length <= 100) ||
          'Address must be less than 100 characters'
      ]"
    >
      <template v-slot:append-inner>
        <v-btn
          color="deep-purple-accent-2"
          @click="handleSubmit"
          :disabled="submitState"
          >{{ loading }}</v-btn
        >
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from 'vue-clerk'
const { isLoaded, isSignedIn, userId } = useAuth()
import { toast } from 'vue-sonner'

const url = ref('')
const prompt = ref('')
const submitState = ref(false)
const loading = ref('生成二维码')

const handleInputKeyup = (e: KeyboardEvent) => {
  if (e.code === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
}

const isValidComplexUrl = (url: string) => {
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(:[0-9]{1,5})?(\/[^\s]*)?$/
  return regex.test(url)
}

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.value.length > 0 && isLoaded.value && !isSignedIn.value) {
    toast.warning('请先登录使用功能。即将跳转到登录页面...')
    submitState.value = true
    setTimeout(() => {
      return navigateTo('/sign-in')
    }, 1600)
  }
}

// client render
const handleSubmit = async () => {
  console.log('handleSubmit')
  submitState.value = true
  if (isLoaded.value && !isSignedIn.value) {
    toast.warning('请先登录使用功能。即将跳转到登录页面...')
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 1600)
    })
    return navigateTo('/sign-in')
  }
  if (url.value.length === 0) {
    toast.warning('请输入要生成图片的链接。')
    submitState.value = false
    return
  }
  if (prompt.value.length === 0) {
    toast.warning('请输入要生成图片的描述。')
    submitState.value = false
    return
  }
  try {
    loading.value = '生成中...'
    const userInfo = await $fetch('/api/me')
    console.log('userInfo,', userInfo)
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 3000)
    })
    loading.value = '生成二维码'
    submitState.value = false
  } catch (e) {
    console.log('generate AI image failed', e)
    submitState.value = false
  }
}
</script>

<style scoped></style>
