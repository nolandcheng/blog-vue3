<!--
 * @Descripttion: 
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2021-12-01 17:41:22
-->
<template>
  <h1>{{ newMsg }}</h1>
  <el-button>测试element-plus</el-button>
</template>

<script lang="ts">
// import { test } from "@/apis/test";
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  toRefs,
  computed,
} from "vue";

interface Book {
  title: string;
  year?: number;
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    const { msg } = toRefs(props);
    const newMsg = computed(() => msg.value + " + vite");

    const name = ref<string>("Word");
    name.value = "girl";

    const book = reactive<Book>({ title: "Vue 3 Guide" });

    const initVue = () => {
      console.log("Hello " + name.value + " by " + book.title);
    };

    onMounted(initVue);

    return {
      newMsg,
    };
  },
  mounted() {
    // console.log(test());
    // test().then((res) => {});
  },
});
</script>
