<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useOrganization, useSession, useUser } from 'vue-clerk'

const TYPES = ['user', 'session', 'organization']

declare global {
  interface Window {
    Prism: {
      highlight: (...args: any) => string
      languages: Record<string, any>
    }
  }
}

const selectedType = ref(TYPES[0])
const { user } = useUser()
const { session } = useSession()
const { organization } = useOrganization()

const selectedCode = computed(() => {
  return JSON.stringify(
    {
      user: user.value,
      session: session.value,
      organization: organization.value
    }[selectedType.value],
    null,
    2
  )
})

const typesToShow = computed(() => {
  return organization.value
    ? TYPES
    : TYPES.filter(type => type !== 'organization')
})

const renderedCode = ref('')

onMounted(() => {
  watch(
    selectedCode,
    value => {
      if (!value) {
        return
      }
      renderedCode.value = window.Prism.highlight(
        value,
        window.Prism.languages.javascript,
        'javascript'
      )
    },
    { immediate: true }
  )
})
</script>

<template>
  <div :class="organization ? 'tw-h-[54.625rem]' : 'tw-h-[41.625rem]'">
    <div
      class="tw-w-full tw-bg-[#F7F7F8] tw-rounded-md tw-p-[0.1875rem] tw-flex tw-gap-1.5"
    >
      <button
        v-for="type in typesToShow"
        :key="type"
        class="tw-capitalize tw-rounded tw-h-7 tw-text-[0.8125rem] tw-flex-1 hover:tw-text-black tw-font-medium"
        :class="[
          selectedType === type
            ? 'tw-bg-white tw-shadow-sm tw-text-black'
            : 'tw-text-[#5E5F6E]'
        ]"
        @click="selectedType = type"
      >
        {{ type }}
      </button>
    </div>
    <div class="tw-relative tw-h-[calc(100%-42px)]">
      <div class="tw-mask tw-h-full">
        <pre class="language-javascript">
           <code class="language-javascript" v-html="renderedCode" />
         </pre>
      </div>
      <div
        class="tw-absolute tw-right-0 tw-top-0 tw-bottom-0 tw-w-10 tw-bg-gradient-to-l tw-from-white to-transparent"
      />
      <div
        class="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-px tw-bg-[#EEEEF0]"
      />
    </div>
  </div>
</template>

<style>
code[class*='language-'],
pre[class*='language-'] {
  color: #c5c8c6;
  font-family: var(--font-geist-mono);
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  font-size: 12px;
}

pre[class*='language-'] {
  padding: 16px 0px 32px;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
  background: white;
  height: 100%;
}

:not(pre) > code[class*='language-'] {
  background: white;
  padding: 0.1em;
  border-radius: 0.3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #7c7c7c;
}

.token.punctuation {
  color: #c5c8c6;
}

.token.namespace {
  opacity: 0.7;
}

.token.property,
.token.keyword,
.token.tag {
  color: #676767;
}

.token.class-name {
  color: #ffffb6;
  text-decoration: underline;
}

.token.boolean,
.token.constant {
  color: #db3fb9;
}

.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.number {
  color: #ff73fd;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #4248da;
}

.token.variable {
  color: #c6c5fe;
}

.token.operator {
  color: #ededed;
}

.token.entity {
  color: #ffffb6;
  cursor: help;
}

.token.url {
  color: #676767;
}

.language-css .token.string,
.style .token.string {
  color: #c1c1c1;
}

.token.atrule,
.token.attr-value {
  color: #f9ee98;
}

.token.function {
  color: #dad085;
}

.token.regex {
  color: #e9c062;
}

.token.important {
  color: #fd971f;
  font-weight: bold;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}
</style>
