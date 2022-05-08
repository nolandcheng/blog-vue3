<!--
 * @Descripttion: 
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2022-05-08 21:07:47
-->
<template>
  <div v-html="mdText"></div>
  <n-button type="primary">1</n-button>
</template>

<script lang="ts">
import { marked } from "marked"
// import test from "@/markdowns/test.md";
import { defineComponent, ref, reactive, onMounted, toRefs, computed } from "vue"

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { msg } = toRefs(props)
    const mdText = computed(() => {
      return marked(msg.value, { sanitize: true })
    })

    const name = ref<string>("Word")
    name.value = "girl"

    const book = reactive<Book>({ title: "Vue 3 Guide" })

    const initVue = () => {
      console.log("Hello " + name.value + " by " + book.title)
    }

    onMounted(initVue)

    return {
      mdText,
    }
  },
})
</script>
