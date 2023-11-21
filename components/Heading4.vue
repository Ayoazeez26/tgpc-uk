<template>
  <h4 class="font-bold md:text-xl text-lg">{{ content }}</h4>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
