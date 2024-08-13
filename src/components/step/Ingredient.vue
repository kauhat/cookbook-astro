<template>
  <span class="ingredient">
    {{ name }}

    <em class="ingredient__quantity">({{ quantity }} {{ units }})</em>
  </span>
</template>

<script lang="ts">
import type { Ingredient } from "@cooklang/cooklang-ts";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    ingredient: Object as PropType<Ingredient>,
  },
  setup({ ingredient }) {
    const { name, quantity, units } = ingredient;

    return {
      name,
      quantity,
      units,
    };
  },
});
</script>

<style>
.ingredient {
  @apply badge badge-secondary;

  /* @apply rounded inline-flex items-baseline;
        @apply bg-base-200 border border-base-content text-base-content; */

  /* padding: 2px 4px; */

  /* margin: -1px 0;
        padding: 0 4px; */
}
</style>
