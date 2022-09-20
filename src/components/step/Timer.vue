<template>
    <span class="timer">
        <a :href="url" target="_blank">⏲️</a>
        {{ quantity }} {{ units }}
    </span>
</template>

<script lang="ts">
import { Recipe, Timer } from '@cooklang/cooklang-ts'
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        timer: (Object as Timer),
    },
    setup({ timer }) {
        const { name, quantity, units } = timer

        const url = `https://www.google.com/search?q=timer+${quantity}+${units}`

        return {
            name, quantity, units, url
        }
    }
})
</script>

<style>
    .timer {
        @apply badge badge-info

        /* @apply rounded inline-flex items-baseline;
        @apply bg-base-200 border border-base-content text-base-content; */

        /* padding: 2px 4px; */

        /* margin: -1px 0;
        padding: 0 4px; */
    }
</style>
