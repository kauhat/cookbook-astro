<template>
  <div class="items flex flex-col *:mb-4">
    <div class="stats stats-horizontal mb-4 border border-base-300 shadow-sm">
      <div class="stat">
        <div class="stat-title">Servings</div>
        <div class="stat-value">{{ servings ?? "?" }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Cooking time</div>
        <div class="stat-value">{{ time ?? "?" }}</div>
      </div>
    </div>

    <div
      class="card card-bordered card-compact w-full border-base-300 shadow-sm"
    >
      <div class="card-body prose prose-lg">
        <h3 class="card-title">Ingredients</h3>

        <ul>
          <li v-for="ingredient in recipe?.data.ingredients">
            {{ ingredient.name }}
          </li>
        </ul>
      </div>
    </div>

    <div
      class="card bg-base-200 card-bordered border-base-300 card-compact shadow-sm"
    >
      <div class="card-body" v-if="source">
        <!-- <span class="card-title">Source</span> -->

        <a
          :href="source"
          class="link link-neutral text-ellipsis overflow-hidden text-nowrap text-center"
          v-if="sourceUrl"
          >{{ sourceUrl.toString() }}</a
        >

        <span v-else>{{ source }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type { CollectionEntry } from "astro:content";

export default defineComponent({
  props: {
    recipe: Object as PropType<CollectionEntry<"recipes">>,
  },
  setup({ recipe }) {
    const { source, servings, time } = recipe?.data;

    const sourceUrl = (() => {
      try {
        return new URL(source);
      } catch (e) {
        return null;
      }
    })();

    return {
      source,
      sourceUrl,
      servings,
      time,
    };
  },
});
</script>
