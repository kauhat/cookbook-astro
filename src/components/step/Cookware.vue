<template>
  <span class="cookware">
    {{ name }}

    <em class="cookware__quantity">{{ quantity }}</em>
  </span>
</template>

<script lang="ts">
import { Recipe } from '@cooklang/cooklang-ts'
import type { Cookware } from '@cooklang/cooklang-ts'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    cookware: Object as PropType<Cookware>,
  },
  setup({ cookware }) {
    const { name, quantity } = cookware

    return {
      name,
      quantity,
    }
  },
})
</script>

<style>
.cookware {
  @apply badge badge-accent;

  /* @apply rounded inline-flex items-baseline;
        @apply bg-secondary border border-secondary-content text-secondary-content; */

  /* padding: 2px 4px; */

  /* margin: -1px 0;
        padding: 0 4px; */
}
</style>
