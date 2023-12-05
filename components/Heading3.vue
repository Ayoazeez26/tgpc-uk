<template>
  <h4
    class="font-bold lg:text-5xl md:text-4xl text-4xl lg:leading-snug md:leading-none leading-snug"
  >
    {{ content }}
  </h4>
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
